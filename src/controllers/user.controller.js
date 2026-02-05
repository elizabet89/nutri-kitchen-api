exports.profile = (req, res) => {
  res.json({
    message: "Perfil protegido 🔐",
    user: req.user
  });
};
