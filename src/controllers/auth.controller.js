const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  console.log("BODY RECIBIDO 👉", req.body);

  try {
    const { telefono, password } = req.body;

    if (!telefono || !password) {
      return res.status(400).json({
        error: "Teléfono y contraseña son obligatorios"
      });
    }

    const user = {
      id: 1,
      telefono: "9991234567",
      passwordHash: await bcrypt.hash("123456", 10)
    };

    if (telefono !== user.telefono) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: user.id, telefono: user.telefono },
      process.env.JWT_SECRET || "nutri_secret_dev",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login exitoso 🥗📱",
      token
    });

  } catch (error) {
    console.error("🔥 ERROR REAL:", error);
    res.status(500).json({ error: "Error en login" });
  }
};
