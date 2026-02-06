// src/controllers/user.controller.js

exports.profile = (req, res) => {
  console.log("👤 Usuario autenticado:", req.user);

  res.json({
    status: "OK",
    message: "Perfil del usuario",
    user: {
      id: req.user.id,
      telefono: req.user.telefono
    }
  });
};