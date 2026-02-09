require("dotenv").config(); // 👈 ESTA LÍNEA ES LA CLAVE



const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

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

console.log("📦 Importando orders.routes");
const orderRoutes = require("./routes/orders.routes"); // <--- IMPORTANTE

const adminOrdersRoutes = require("./routes/admin.orders.routes");


console.log("📦 Importando product.routes");
const productRoutes = require("./routes/product.routes");

console.log("📦 Importando ingredient.routes");
const ingredientRoutes = require("./routes/ingredient.routes");




app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminOrdersRoutes);
app.use("/api/products", productRoutes);
app.use("/api/ingredients", ingredientRoutes);

/* ROOT */
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Nutri Kitchen API activa 🥗"
  });
});


/* MONGODB BASE DEDATOS */


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB conectado"))
  .catch(err => console.error("❌ Error MongoDB:", err));

console.log("✅ app.js exportado correctamente");

module.exports = app;

