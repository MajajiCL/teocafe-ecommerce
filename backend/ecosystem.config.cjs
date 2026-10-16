module.exports = {
  apps: [
    {
      name: "teocafe-api",
      script: "./server.js",
      cwd: "/home/vpsia/teocafe-backend",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "250M",
      env: {
        NODE_ENV: "production",
        PORT: 4510,
        HOST: "127.0.0.1"
      }
    }
  ]
};
