const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// 📝 REGISTRO DE USUARIO
exports.register = async (req, res) => {
  try {
    const { name, telefono, password, email } = req.body;

    if (!name|| !telefono || !password) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ telefono });
    if (existingUser) {
      return res.status(400).json({ error: "Usuario ya registrado" });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const newUser = new User({
      name,
      telefono,
      email,
      password: hashedPassword,
       role: "admin" // 👈 DEBE existir en el enum
    });

    await newUser.save();

    res.status(201).json({ message: "Usuario registrado correctamente 🥗" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en registro" });
  }
};

// 🔐 LOGIN DE USUARIO
exports.login = async (req, res) => {
  try {
    const { telefono, password } = req.body;

    if (!telefono || !password) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    // Buscar usuario por teléfono
    const user = await User.findOne({ telefono });
    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Comparar contraseña
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Crear JWT
    const token = jwt.sign(
      { id: user._id, telefono: user.telefono, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login exitoso 🥗",
      token
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en login" });
  }
};