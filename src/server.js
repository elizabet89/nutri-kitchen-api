const app = require("./app");

console.log("✅ server.js cargado");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
