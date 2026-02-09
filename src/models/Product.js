const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    // Precio base (tamaño chico)
    basePrice: {
      type: Number,
      required: true
    },

    // Tamaños disponibles
    sizes: [
      {
        name: {
          type: String, // chica | mediana | grande
          required: true
        },
        extraPrice: {
          type: Number,
          default: 0
        }
      }
    ],

    // Ingredientes por defecto (solo menú)
    defaultIngredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient"
      }
    ],

    // ¿Se puede personalizar?
    isCustomizable: {
      type: Boolean,
      default: false
    },

    // Activo / visible en el menú
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);