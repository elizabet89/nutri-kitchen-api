console.log("✅ app.js cargado");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

/* SEGURIDAD */
app.use(helmet());
app.use(cors());

/* BODY */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* RUTAS */
console.log("📦 Importando auth.routes");
const authRoutes = require("./routes/auth.routes");

console.log("📦 Importando user.routes");
const userRoutes = require("./routes/user.routes");
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* ROOT */
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Nutri Kitchen API activa 🥗"
  });
});

console.log("✅ app.js exportado correctamente");
module.exports = app;
