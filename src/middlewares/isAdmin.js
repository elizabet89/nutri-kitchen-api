const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      error: "No autorizado"
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      error: "Acceso solo para administradores"
    });
  }

  next();
};

module.exports = isAdmin;