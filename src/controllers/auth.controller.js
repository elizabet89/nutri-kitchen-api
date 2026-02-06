const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* =========================
   📝 REGISTER
========================= */
exports.register = async (req, res) => {
  try {
    const { name, telefono, email, password } = req.body;

    if (!name || !telefono || !password) {
      return res.status(400).json({
        message: "Nombre, teléfono y contraseña son obligatorios"
      });
    }

    // ¿Usuario existe?
    const exists = await User.findOne({ telefono });
    if (exists) {
      return res.status(400).json({
        message: "El usuario ya existe"
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear usuario
    const user = await User.create({
      name,
      telefono,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Usuario registrado correctamente 🥗",
      user: {
        id: user._id,
        name: user.name,
        telefono: user.telefono
      }
    });

  } catch (error) {
    console.error("❌ Register error:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

/* =========================
   🔐 LOGIN
========================= */
exports.login = async (req, res) => {
  console.log("📥 BODY LOGIN:", req.body);

  try {
    const { telefono, password } = req.body;

    if (!telefono || !password) {
      return res.status(400).json({
        message: "Teléfono y contraseña son obligatorios"
      });
    }

    // Buscar usuario en Mongo
    const user = await User.findOne({ telefono });
    if (!user) {
      return res.status(401).json({
        message: "Credenciales inválidas"
      });
    }

    // Comparar password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Credenciales inválidas"
      });
    }

    // Crear JWT
    const token = jwt.sign(
      { id: user._id, telefono: user.telefono },
      process.env.JWT_SECRET || "nutri_secret_dev",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login exitoso 🥗📱",
      token
    });

  } catch (error) {
    console.error("🔥 Login error:", error);
    res.status(500).json({ message: "Error en login" });
  }
};