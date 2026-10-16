require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const Database = require("better-sqlite3");
const nodemailer = require("nodemailer");

const PORT = Number(process.env.PORT || 4510);
const HOST = process.env.HOST || "127.0.0.1";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "";
const OWNER_EMAIL = process.env.OWNER_EMAIL || "mandresan@gmail.com";
const WHATSAPP_PHONE = process.env.WHATSAPP_PHONE || "56990581549";

const DATA_DIR = path.join(__dirname, "data");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DB_PATH = path.join(DATA_DIR, "teocafe.db");
const db = new Database(DB_PATH);

// Hardening SQLite: WAL + busy_timeout + foreign_keys
db.pragma("journal_mode = WAL");
db.pragma("busy_timeout = 5000");
db.pragma("foreign_keys = ON");

// 1. Esquema de Base de Datos
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    handle TEXT,
    source TEXT,
    vendor TEXT,
    category TEXT,
    category_label TEXT,
    price INTEGER NOT NULL,
    stock INTEGER NOT NULL DEFAULT 50,
    active INTEGER NOT NULL DEFAULT 1,
    image TEXT,
    images_json TEXT,
    variants_json TEXT,
    description TEXT,
    short_description TEXT,
    tags_json TEXT,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_code TEXT NOT NULL UNIQUE,
    brand_name TEXT NOT NULL DEFAULT 'Té o Café',
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    shipping_address TEXT NOT NULL,
    shipping_zone TEXT NOT NULL,
    payment_method TEXT NOT NULL,
    payment_status TEXT NOT NULL DEFAULT 'pendiente',
    order_status TEXT NOT NULL DEFAULT 'recibido',
    tracking_code TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    subtotal INTEGER NOT NULL,
    shipping_cost INTEGER NOT NULL,
    total INTEGER NOT NULL,
    items_json TEXT NOT NULL,
    client_ip TEXT DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_orders_code ON orders(order_code);
  CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at DESC);

  CREATE TABLE IF NOT EXISTS order_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    event_type TEXT NOT NULL,
    detail TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE
  );
`);

// 2. Semilla automática desde products_data.json si la tabla está vacía
function seedProductsIfNeeded() {
  const countRow = db.prepare("SELECT COUNT(*) AS total FROM products").get();
  if (countRow && countRow.total > 0) {
    console.log(`[DB] Catálogo SQLite activo con ${countRow.total} productos.`);
    return;
  }

  const candidates = [
    path.join(__dirname, "products_data.json"),
    path.join(__dirname, "..", "products_data.json"),
    "/var/www/teocafe-web/products_data.json"
  ];
  const jsonPath = candidates.find(p => fs.existsSync(p));
  if (!jsonPath) {
    console.warn("[DB] No se encontró products_data.json para poblar catálogo inicial.");
    return;
  }

  const raw = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const insertStmt = db.prepare(`
    INSERT OR IGNORE INTO products (
      id, title, handle, source, vendor, category, category_label,
      price, stock, active, image, images_json, variants_json,
      description, short_description, tags_json
    ) VALUES (
      @id, @title, @handle, @source, @vendor, @category, @category_label,
      @price, @stock, @active, @image, @images_json, @variants_json,
      @description, @short_description, @tags_json
    )
  `);

  const insertMany = db.transaction((items) => {
    for (const p of items) {
      insertStmt.run({
        id: Number(p.id),
        title: String(p.title || ""),
        handle: String(p.handle || ""),
        source: String(p.source || ""),
        vendor: String(p.vendor || ""),
        category: String(p.category || ""),
        category_label: String(p.category_label || ""),
        price: Number(p.price || 0),
        stock: 50,
        active: 1,
        image: String(p.image || ""),
        images_json: JSON.stringify(Array.isArray(p.images) ? p.images : []),
        variants_json: JSON.stringify(Array.isArray(p.variants) ? p.variants : []),
        description: String(p.description || ""),
        short_description: String(p.short_description || ""),
        tags_json: JSON.stringify(Array.isArray(p.tags) ? p.tags : [])
      });
    }
  });

  insertMany(raw);
  console.log(`[DB] Semilla completada: ${raw.length} productos insertados en SQLite.`);
}

seedProductsIfNeeded();

// 3. Transporte SMTP con reintento ante errores pasajeros (lección crm_smtp_dotenv_bug.md)
let mailTransporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  mailTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}

async function sendEmailWithRetry(mailOptions, maxAttempts = 3) {
  if (!mailTransporter) return { sent: false, reason: "smtp_not_configured" };
  let lastErr = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const info = await mailTransporter.sendMail(mailOptions);
      return { sent: true, messageId: info.messageId, attempt };
    } catch (err) {
      lastErr = err;
      console.error(`[SMTP] Intento ${attempt}/${maxAttempts} falló: ${err.message}`);
      if (attempt < maxAttempts) {
        await new Promise(r => setTimeout(r, attempt * 2000));
      }
    }
  }
  return { sent: false, reason: lastErr ? lastErr.message : "unknown" };
}

function formatCLP(n) {
  return "$" + Number(n || 0).toLocaleString("es-CL");
}

function buildOrderEmailHtml(order, items) {
  const zoneLabels = {
    rm: "Santiago (Región Metropolitana — 24 a 48 hrs)",
    regiones: "Regiones de Chile (Starken / Chilexpress)",
    retiro: "Retiro en Tostaduría (Providencia)"
  };
  const paymentLabels = {
    webpay: "Webpay Plus (Transbank)",
    mercadopago: "Mercado Pago",
    transfer: "Transferencia Bancaria Directa"
  };

  const rowsHtml = items.map(it => `
    <tr>
      <td style="padding:10px 8px;border-bottom:1px solid #2b2118;color:#f5ebe1;font-size:13px;">
        <strong>${escapeHtml(it.title)}</strong><br>
        <span style="color:#b89f88;font-size:11px;">Formato: ${escapeHtml(it.variantTitle)}</span>
      </td>
      <td style="padding:10px 8px;border-bottom:1px solid #2b2118;color:#f5ebe1;text-align:center;font-size:13px;">${it.qty}</td>
      <td style="padding:10px 8px;border-bottom:1px solid #2b2118;color:#d97706;text-align:right;font-weight:bold;font-size:13px;">${formatCLP(it.price * it.qty)}</td>
    </tr>
  `).join("");

  return `
  <div style="background:#0d0906;color:#f5ebe1;font-family:Arial,sans-serif;padding:28px;max-width:600px;margin:0 auto;border-radius:16px;border:1px solid #3d2c1e;">
    <div style="border-bottom:1px solid #3d2c1e;padding-bottom:16px;margin-bottom:20px;">
      <span style="color:#f59e0b;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Tostaduría &amp; Hoja Noble · teocafe.cl</span>
      <h1 style="margin:6px 0 4px;font-size:22px;color:#ffffff;">¡Gracias por tu pedido, ${escapeHtml(order.customer_name)}!</h1>
      <p style="margin:0;color:#b89f88;font-size:13px;">Código de Orden: <strong style="color:#f59e0b;">${order.order_code}</strong></p>
    </div>

    <table style="width:100%;border-collapse:collapse;margin-bottom:18px;">
      <thead>
        <tr style="border-bottom:2px solid #3d2c1e;color:#f59e0b;font-size:11px;text-transform:uppercase;">
          <th style="text-align:left;padding:8px;">Producto</th>
          <th style="text-align:center;padding:8px;">Cant.</th>
          <th style="text-align:right;padding:8px;">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>

    <div style="background:#160f0a;padding:14px 16px;border-radius:12px;border:1px solid #2b2118;margin-bottom:18px;font-size:13px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="color:#b89f88;">Subtotal:</span>
        <strong style="color:#f5ebe1;float:right;">${formatCLP(order.subtotal)}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
        <span style="color:#b89f88;">Despacho (${zoneLabels[order.shipping_zone] || order.shipping_zone}):</span>
        <strong style="color:#f5ebe1;float:right;">${order.shipping_cost === 0 ? "¡GRATIS!" : formatCLP(order.shipping_cost)}</strong>
      </div>
      <div style="border-top:1px solid #3d2c1e;padding-top:8px;font-size:16px;">
        <span>Total Orden:</span>
        <strong style="color:#f59e0b;float:right;">${formatCLP(order.total)}</strong>
      </div>
    </div>

    <div style="background:#160f0a;padding:14px 16px;border-radius:12px;border:1px solid #2b2118;margin-bottom:18px;font-size:12px;color:#d6c4b2;line-height:1.6;">
      <strong style="color:#f59e0b;display:block;margin-bottom:4px;">Datos de Entrega y Pago:</strong>
      <strong>Cliente:</strong> ${escapeHtml(order.customer_name)} (${escapeHtml(order.customer_phone)})<br>
      <strong>Dirección:</strong> ${escapeHtml(order.shipping_address)}<br>
      <strong>Medio de Pago seleccionado:</strong> ${paymentLabels[order.payment_method] || order.payment_method}
    </div>

    <p style="font-size:12px;color:#b89f88;text-align:center;margin-top:20px;">
      Puedes consultar el estado de tu pedido en cualquier momento en <a href="https://teocafe.cl/?orden=${encodeURIComponent(order.order_code)}" style="color:#f59e0b;">teocafe.cl</a>
    </p>
  </div>
  `;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 4. Servidor Express y Middlewares
const app = express();
app.set("trust proxy", 1);
app.use(cors({
  origin: [
    "https://teocafe.cl",
    "https://www.teocafe.cl",
    "https://majajicl.github.io",
    "http://localhost:3110",
    "http://127.0.0.1:3110"
  ]
}));
app.use(express.json({ limit: "512kb" }));

// Rate limiting simple en memoria para creación de órdenes (máx 12 órdenes / 15 min por IP)
const orderRateMap = new Map();
function checkOrderRateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const entry = orderRateMap.get(ip) || { count: 0, resetAt: now + windowMs };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + windowMs;
  }
  entry.count += 1;
  orderRateMap.set(ip, entry);
  return entry.count <= 12;
}

// Middleware autenticación Admin
function requireAdmin(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : (req.headers["x-admin-token"] || "");
  if (!ADMIN_TOKEN || !token || token !== ADMIN_TOKEN) {
    return res.status(401).json({ ok: false, error: "No autorizado" });
  }
  next();
}

// --- ENDPOINTS PÚBLICOS ---

app.get("/api/health", (req, res) => {
  const prodCount = db.prepare("SELECT COUNT(*) AS c FROM products WHERE active = 1").get().c;
  const orderCount = db.prepare("SELECT COUNT(*) AS c FROM orders").get().c;
  const walMode = db.pragma("journal_mode", { simple: true });
  res.json({
    ok: true,
    service: "teocafe-api",
    domain: "teocafe.cl",
    journalMode: walMode,
    activeProducts: prodCount,
    totalOrders: orderCount,
    smtpConfigured: Boolean(mailTransporter),
    timestamp: new Date().toISOString()
  });
});

app.get("/api/products", (req, res) => {
  const rows = db.prepare("SELECT * FROM products WHERE active = 1 ORDER BY id ASC").all();
  const products = rows.map(r => ({
    id: r.id,
    title: r.title,
    handle: r.handle,
    source: r.source,
    vendor: r.vendor,
    category: r.category,
    category_label: r.category_label,
    price: r.price,
    stock: r.stock,
    image: r.image,
    images: JSON.parse(r.images_json || "[]"),
    variants: JSON.parse(r.variants_json || "[]"),
    description: r.description,
    short_description: r.short_description,
    tags: JSON.parse(r.tags_json || "[]")
  }));
  res.json({ ok: true, count: products.length, products });
});

// Crear Orden Real
app.post("/api/orders", async (req, res) => {
  try {
    const clientIp = req.ip || req.headers["x-forwarded-for"] || "";
    if (!checkOrderRateLimit(clientIp)) {
      return res.status(429).json({
        ok: false,
        error: "Demasiados intentos seguidos. Por favor espera unos minutos."
      });
    }

    const {
      brandName,
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      shippingZone,
      paymentMethod,
      notes,
      items
    } = req.body || {};

    if (!customerName || String(customerName).trim().length < 2) {
      return res.status(400).json({ ok: false, error: "Ingresa tu nombre completo." });
    }
    if (!customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(customerEmail).trim())) {
      return res.status(400).json({ ok: false, error: "Ingresa un correo electrónico válido." });
    }
    if (!customerPhone || String(customerPhone).trim().length < 8) {
      return res.status(400).json({ ok: false, error: "Ingresa un teléfono o WhatsApp válido." });
    }
    if (!shippingAddress || String(shippingAddress).trim().length < 5) {
      return res.status(400).json({ ok: false, error: "Ingresa la dirección de despacho o retiro." });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ ok: false, error: "Tu canasta está vacía." });
    }

    const validZones = ["rm", "regiones", "retiro"];
    const zone = validZones.includes(shippingZone) ? shippingZone : "rm";
    const validPayments = ["webpay", "mercadopago", "transfer"];
    const payment = validPayments.includes(paymentMethod) ? paymentMethod : "transfer";

    // Validar cada producto y su precio en el servidor
    const getProdStmt = db.prepare("SELECT * FROM products WHERE id = ? AND active = 1");
    const verifiedItems = [];
    let subtotal = 0;

    for (const rawItem of items) {
      const prodId = Number(rawItem.id);
      const qty = Math.max(1, Math.min(50, Number(rawItem.qty || 1)));
      const reqVarTitle = String(rawItem.variantTitle || "Estándar").trim();

      const dbProd = getProdStmt.get(prodId);
      if (!dbProd) {
        return res.status(400).json({
          ok: false,
          error: `El producto "${rawItem.title || prodId}" ya no se encuentra disponible.`
        });
      }
      if (dbProd.stock < qty) {
        return res.status(400).json({
          ok: false,
          error: `Stock insuficiente para "${dbProd.title}" (disponibles: ${dbProd.stock}).`
        });
      }

      const isSubscription = reqVarTitle.includes("(Suscripción -15%)");
      const cleanVarTitle = reqVarTitle.replace(" (Suscripción -15%)", "").trim();

      const variants = JSON.parse(dbProd.variants_json || "[]");
      let unitPrice = Number(dbProd.price);

      if (variants.length > 0) {
        const matchedVar = variants.find(v => String(v.title).trim().toLowerCase() === cleanVarTitle.toLowerCase());
        if (matchedVar && Number(matchedVar.price) > 0) {
          unitPrice = Number(matchedVar.price);
        }
      }

      if (isSubscription) {
        unitPrice = Math.round(unitPrice * 0.85);
      }

      subtotal += unitPrice * qty;
      verifiedItems.push({
        id: dbProd.id,
        title: dbProd.title,
        variantTitle: reqVarTitle,
        price: unitPrice,
        qty,
        image: dbProd.image
      });
    }

    let shippingCost = 0;
    if (zone === "rm") {
      shippingCost = subtotal >= 30000 ? 0 : 2990;
    } else if (zone === "regiones") {
      shippingCost = 4990;
    } else {
      shippingCost = 0;
    }

    const total = subtotal + shippingCost;

    // Generar código único TC-YYYYMMDD-XXXX
    const now = new Date();
    const ymd = now.toISOString().slice(0, 10).replace(/-/g, "");
    const randSuffix = crypto.randomBytes(2).toString("hex").toUpperCase();
    const orderCode = `TC-${ymd}-${randSuffix}`;

    const createOrderTx = db.transaction(() => {
      const info = db.prepare(`
        INSERT INTO orders (
          order_code, brand_name, customer_name, customer_email, customer_phone,
          shipping_address, shipping_zone, payment_method, payment_status,
          order_status, notes, subtotal, shipping_cost, total, items_json, client_ip
        ) VALUES (
          @order_code, @brand_name, @customer_name, @customer_email, @customer_phone,
          @shipping_address, @shipping_zone, @payment_method, 'pendiente',
          'recibido', @notes, @subtotal, @shipping_cost, @total, @items_json, @client_ip
        )
      `).run({
        order_code: orderCode,
        brand_name: String(brandName || "Té o Café").slice(0, 60),
        customer_name: String(customerName).trim().slice(0, 120),
        customer_email: String(customerEmail).trim().toLowerCase().slice(0, 120),
        customer_phone: String(customerPhone).trim().slice(0, 40),
        shipping_address: String(shippingAddress).trim().slice(0, 250),
        shipping_zone: zone,
        payment_method: payment,
        notes: String(notes || "").trim().slice(0, 500),
        subtotal,
        shipping_cost: shippingCost,
        total,
        items_json: JSON.stringify(verifiedItems),
        client_ip: String(clientIp).slice(0, 64)
      });

      const decStockStmt = db.prepare("UPDATE products SET stock = MAX(0, stock - ?), updated_at = datetime('now') WHERE id = ?");
      for (const it of verifiedItems) {
        decStockStmt.run(it.qty, it.id);
      }

      db.prepare(`
        INSERT INTO order_events (order_id, event_type, detail)
        VALUES (?, 'created', ?)
      `).run(info.lastInsertRowid, `Orden ${orderCode} creada por ${customerName} (${formatCLP(total)})`);

      return db.prepare("SELECT * FROM orders WHERE id = ?").get(info.lastInsertRowid);
    });

    const savedOrder = createOrderTx();

    // Construir mensaje de WhatsApp listo para enviar
    const itemsSummaryTxt = verifiedItems
      .map(i => `• ${i.qty}x ${i.title} (${i.variantTitle}) — ${formatCLP(i.price * i.qty)}`)
      .join("\n");
    const waText = [
      `Hola *Té o Café* ☕🍃, acabo de registrar mi pedido en *teocafe.cl*:`,
      ``,
      `🧾 *Código de Orden:* ${orderCode}`,
      `👤 *Cliente:* ${savedOrder.customer_name}`,
      `📍 *Despacho:* ${savedOrder.shipping_address} (${zone.toUpperCase()})`,
      `💳 *Medio de pago:* ${payment.toUpperCase()}`,
      ``,
      `*Productos:*`,
      itemsSummaryTxt,
      ``,
      `📦 *Subtotal:* ${formatCLP(subtotal)}`,
      `🚚 *Envío:* ${shippingCost === 0 ? "GRATIS" : formatCLP(shippingCost)}`,
      `💰 *Total a pagar:* *${formatCLP(total)}*`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;

    // Enviar correo asíncrono (sin bloquear la respuesta al cliente)
    setImmediate(async () => {
      const html = buildOrderEmailHtml(savedOrder, verifiedItems);
      const emailRes = await sendEmailWithRetry({
        from: `"Té o Café Chile" <${process.env.SMTP_USER || "contacto@agentesautonomoschile.cl"}>`,
        to: savedOrder.customer_email,
        bcc: OWNER_EMAIL,
        subject: `☕ Pedido Recibido ${orderCode} — Té o Café Chile (${formatCLP(total)})`,
        html
      });
      db.prepare(`
        INSERT INTO order_events (order_id, event_type, detail)
        VALUES (?, 'email_notification', ?)
      `).run(savedOrder.id, JSON.stringify(emailRes));
    });

    res.status(201).json({
      ok: true,
      orderCode,
      order: {
        orderCode: savedOrder.order_code,
        customerName: savedOrder.customer_name,
        customerEmail: savedOrder.customer_email,
        customerPhone: savedOrder.customer_phone,
        shippingAddress: savedOrder.shipping_address,
        shippingZone: savedOrder.shipping_zone,
        paymentMethod: savedOrder.payment_method,
        paymentStatus: savedOrder.payment_status,
        orderStatus: savedOrder.order_status,
        subtotal: savedOrder.subtotal,
        shippingCost: savedOrder.shipping_cost,
        total: savedOrder.total,
        items: verifiedItems,
        createdAt: savedOrder.created_at
      },
      whatsappUrl,
      transferInfo: {
        razonSocial: "AVOLAV SpA — Té o Café Chile",
        rut: "78.459.905-1",
        banco: "Banco Estado / Cuenta Empresa",
        emailComprobante: "contacto@agentesautonomoschile.cl",
        glosa: `Orden ${orderCode}`
      }
    });
  } catch (err) {
    console.error("[POST /api/orders] Error:", err);
    res.status(500).json({ ok: false, error: "Error interno al procesar la orden." });
  }
});

// Consultar estado de una orden por código (público para seguimiento del cliente)
app.get("/api/orders/:code", (req, res) => {
  const code = String(req.params.code || "").trim().toUpperCase();
  const row = db.prepare("SELECT * FROM orders WHERE order_code = ?").get(code);
  if (!row) {
    return res.status(404).json({ ok: false, error: "No encontramos una orden con ese código." });
  }
  const events = db.prepare("SELECT event_type, detail, created_at FROM order_events WHERE order_id = ? ORDER BY id ASC").all(row.id);
  res.json({
    ok: true,
    order: {
      orderCode: row.order_code,
      brandName: row.brand_name,
      customerName: row.customer_name,
      shippingZone: row.shipping_zone,
      shippingAddress: row.shipping_address,
      paymentMethod: row.payment_method,
      paymentStatus: row.payment_status,
      orderStatus: row.order_status,
      trackingCode: row.tracking_code,
      subtotal: row.subtotal,
      shippingCost: row.shipping_cost,
      total: row.total,
      items: JSON.parse(row.items_json || "[]"),
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      events
    }
  });
});

// --- ENDPOINTS DE ADMINISTRACIÓN ---

app.get("/api/admin/stats", requireAdmin, (req, res) => {
  const totals = db.prepare(`
    SELECT
      COUNT(*) AS total_orders,
      COALESCE(SUM(total), 0) AS gross_revenue,
      COALESCE(SUM(CASE WHEN payment_status = 'pagado' THEN total ELSE 0 END), 0) AS paid_revenue,
      SUM(CASE WHEN order_status = 'recibido' THEN 1 ELSE 0 END) AS pending_orders
    FROM orders
  `).get();
  const lowStock = db.prepare("SELECT COUNT(*) AS c FROM products WHERE stock <= 5 AND active = 1").get().c;
  res.json({ ok: true, stats: { ...totals, lowStock } });
});

app.get("/api/admin/orders", requireAdmin, (req, res) => {
  const limit = Math.min(200, Math.max(1, Number(req.query.limit || 50)));
  const status = req.query.status ? String(req.query.status).trim() : "";
  let rows;
  if (status) {
    rows = db.prepare("SELECT * FROM orders WHERE order_status = ? ORDER BY id DESC LIMIT ?").all(status, limit);
  } else {
    rows = db.prepare("SELECT * FROM orders ORDER BY id DESC LIMIT ?").all(limit);
  }
  res.json({
    ok: true,
    orders: rows.map(r => ({
      ...r,
      items: JSON.parse(r.items_json || "[]")
    }))
  });
});

app.patch("/api/admin/orders/:code", requireAdmin, (req, res) => {
  const code = String(req.params.code || "").trim().toUpperCase();
  const row = db.prepare("SELECT * FROM orders WHERE order_code = ?").get(code);
  if (!row) {
    return res.status(404).json({ ok: false, error: "Orden no encontrada." });
  }

  const { paymentStatus, orderStatus, trackingCode, notes } = req.body || {};
  const newPayStatus = paymentStatus || row.payment_status;
  const newOrdStatus = orderStatus || row.order_status;
  const newTracking = trackingCode !== undefined ? String(trackingCode).trim() : row.tracking_code;
  const newNotes = notes !== undefined ? String(notes).trim() : row.notes;

  db.prepare(`
    UPDATE orders
    SET payment_status = ?, order_status = ?, tracking_code = ?, notes = ?, updated_at = datetime('now')
    WHERE id = ?
  `).run(newPayStatus, newOrdStatus, newTracking, newNotes, row.id);

  db.prepare(`
    INSERT INTO order_events (order_id, event_type, detail)
    VALUES (?, 'status_updated', ?)
  `).run(row.id, `Estado: ${newOrdStatus} | Pago: ${newPayStatus} | Tracking: ${newTracking || "-"}`);

  const updated = db.prepare("SELECT * FROM orders WHERE id = ?").get(row.id);
  res.json({
    ok: true,
    order: {
      ...updated,
      items: JSON.parse(updated.items_json || "[]")
    }
  });
});

app.patch("/api/admin/products/:id", requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  const prod = db.prepare("SELECT * FROM products WHERE id = ?").get(id);
  if (!prod) {
    return res.status(404).json({ ok: false, error: "Producto no encontrado." });
  }

  const newPrice = req.body.price !== undefined ? Number(req.body.price) : prod.price;
  const newStock = req.body.stock !== undefined ? Number(req.body.stock) : prod.stock;
  const newActive = req.body.active !== undefined ? (req.body.active ? 1 : 0) : prod.active;

  db.prepare(`
    UPDATE products
    SET price = ?, stock = ?, active = ?, updated_at = datetime('now')
    WHERE id = ?
  `).run(newPrice, newStock, newActive, id);

  const updated = db.prepare("SELECT * FROM products WHERE id = ?").get(id);
  res.json({ ok: true, product: updated });
});

app.listen(PORT, HOST, () => {
  console.log(`✅ [teocafe-api] Escuchando en http://${HOST}:${PORT}`);
});
