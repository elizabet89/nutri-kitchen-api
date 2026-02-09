const Ingredient = require("../models/Ingredient");

/**
 * Crear ingrediente (solo admin)
 */
exports.createIngredient = async (req, res) => {
  try {
    const { name, type, priceExtra = 0 } = req.body;

    if (!name || !type) {
      return res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    const ingredient = new Ingredient({
      name,
      type,
      priceExtra
    });

    await ingredient.save();

    res.status(201).json(ingredient);
  } catch (error) {
    console.error("❌ Error creando ingrediente:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

/**
 * Obtener ingredientes por tipo
 */
exports.getByType = async (req, res) => {
  try {
    const { type } = req.params;

    const ingredients = await Ingredient.find({ type });

    res.json(ingredients);
  } catch (error) {
    console.error("❌ Error obteniendo ingredientes:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};