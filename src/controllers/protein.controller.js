const Protein = require("../models/Protein");



// 🧪 Ruta de prueba
exports.test = (req, res) => {
  res.json({ message: "Protein controller OK 💪" });
};

exports.createProtein = async (req, res) => {
  try {
    const { nombre, precio } = req.body;

    if (!nombre || precio == null) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const exists = await Protein.findOne({ nombre });
    if (exists) {
      return res.status(400).json({ error: "La proteína ya existe" });
    }

    const protein = await Protein.create({ nombre, precio });
    res.status(201).json(protein);
  } catch (error) {
    res.status(500).json({ error: "Error creando proteína" });
  }
};

exports.getProteins = async (req, res) => {
  try {
    const proteins = await Protein.find({ disponible: true });
    res.json(proteins);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo proteínas" });
  }
};