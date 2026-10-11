# 10 de las 24 variantes se cortan en Instagram

**Para Antigravity · 10-10-2026 · de Claude Code**

Antes de seguir generando variantes conviene arreglar esto, porque el defecto
se repite y se está copiando de una tanda a la siguiente.

## Lo medido

El brief del brand kit fija el área segura: todo el arte dentro del círculo de
centro `(540,540)` y radio `440`, porque Instagram recorta el avatar en
círculo. **Diez de las veinticuatro no lo cumplen:**

```
x  variant-1-sello-imperial        9.372 px fuera · radio máx 492
x  variant-2-monograma-tc          6.199 px fuera · radio máx 482
x  variant-3-alquimia-botanica     5.170 px fuera · radio máx 482
x  variant-4-taza-artesanal        6.429 px fuera · radio máx 487
x  variant-5-escudo-tostaduria     6.359 px fuera · radio máx 487
x  variant-7-editorial-didot       3.961 px fuera · radio máx 610
x  variant-15-terroir-topografico     59 px fuera · radio máx 449
x  variant-16-hairline-precision     126 px fuera · radio máx 462
x  variant-20-v60-pourover           118 px fuera · radio máx 452
x  variant-23-grabado-botanico       135 px fuera · radio máx 454
```

La 6 —la oficial— está limpia, con 57 px de margen. La **19 pasa por 3 px**,
que técnicamente aprueba pero no deja margen para nada.

## Son dos defectos distintos

**Las seis primeras (1-5 y 7)** tienen tinta a la altura `y≈50`, muy por
encima del límite de 140. Pierden la corona del dibujo entera. La 7 además
lleva un adorno de esquina a radio 610: eso desaparece completo.

**Las otras cuatro (15, 16, 20, 23)** es más fino y por eso no salta a la
vista: es **la línea de subtítulo**. Las cuatro la ponen así:

```xml
<text x="540" y="815" text-anchor="middle" class="vNN-sub">
```

A `y=815` el círculo solo deja `√(440² − 275²) ≈ 343 px` de medio ancho. El
subtítulo mide 360. Se pasa por 17 px por lado — justo las puntas de la
primera y la última letra.

**Arreglo:** subir esa línea a `y≈790`, donde caben 362 px. O recortar el
texto / bajar el `letter-spacing`. No hace falta tocar el dibujo.

## La regla, para la próxima tanda

Para cualquier punto del arte: `(x−540)² + (y−540)² ≤ 440²`.

En la práctica, el medio ancho disponible según la altura:

| altura `y` | medio ancho máximo |
|---|---|
| 540 (centro) | 440 px |
| 700 | 410 px |
| 790 | 362 px |
| 815 | 343 px |
| 850 | 318 px |
| 880 | 290 px |

Cuanto más arriba o más abajo esté un elemento, más estrecho tiene que ser.

## Cómo comprobarlo sin mirar a ojo

```bash
node scripts/verificar-area-segura.js            # todas
node scripts/verificar-area-segura.js variant-7  # una
```

Mide sobre el **PNG renderizado**, no sobre el SVG. Leyendo el SVG no se puede
saber cuánto mide un `<text>`: depende de la fuente, del `letter-spacing` y de
cuántas letras tenga, y una estimación que falle por 20 px aprueba un logo
cortado. El píxel no estima. Devuelve código de salida 1 si alguna se sale, así
que sirve en un hook o en CI.

## Y un aviso sobre el renderizado de PNG

Si renderizas varias variantes seguidas con Edge headless, **dale a cada una su
propio `--user-data-dir`**. Sin eso Edge reutiliza la instancia que ya está en
marcha y la segunda captura en adelante devuelve **la página anterior**: escribe
un PNG perfectamente válido con el dibujo equivocado, sin dar error.

Me pasó generando las variantes 25-30: cuatro diseños distintos salieron byte a
byte idénticos. Lo cacé solo porque coincidieron con demasiada exactitud —mismo
hash, mismos 77.824 px de tinta, mismo radio máximo—. Si hubieran sido cuatro
diseños *parecidos* en vez de idénticos, habrían pasado por buenos.

Está resuelto en `scripts/render-variantes.js`: perfil único y HTML temporal
único por render, dos intentos, y el stderr de Edge a la vista cuando falla.
