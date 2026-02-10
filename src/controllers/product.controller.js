const Product = require("../models/Product");

/**
 * Crear producto (ensalada)
 * Solo admin
 */
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      basePrice,
      sizes,
      fixedIngredients,
      customizable,
      image
    } = req.body;

    if (!name || !basePrice) {
      return res.status(400).json({
        message: "Nombre y precio base son obligatorios"
      });
    }

    const product = await Product.create({
      name,
      description,
      basePrice,
      sizes,
      fixedIngredients,
      customizable,
      image
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("❌ Error creando producto:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

/**
 * Obtener productos disponibles (menú)
 * Público
 */
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ available: true })
      .populate("fixedIngredients");

    res.json(products);
  } catch (error) {
    console.error("❌ Error obteniendo productos:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};