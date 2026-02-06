const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI no está definido. Verifica tu archivo .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("🍃 MongoDB conectado correctamente");
  } catch (error) {
    if (error.message.includes("querySrv")) {
      console.error("❌ Error DNS: no se pudo resolver el host. Verifica tu IP en MongoDB Atlas y tu conexión a Internet.");
    } else if (error.message.includes("authentication failed")) {
      console.error("❌ Error de autenticación: usuario o contraseña incorrectos en MONGO_URI.");
    } else {
      console.error("❌ Error conectando MongoDB:", error.message);
    }
    process.exit(1);
  }
};

module.exports = connectDB;