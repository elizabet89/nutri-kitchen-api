require("dotenv").config(); // 👈 ESTA LÍNEA ES OBLIGATORIA

const app = require("./app");
const connectDB = require("./config/db");
console.log("✅ server.js cargado");

// conectar DB
connectDB();

//const PORT = 3000;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
