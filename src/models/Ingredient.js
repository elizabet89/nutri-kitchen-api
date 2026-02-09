const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: [
        "ingrediente",
        "proteina",
        "complemento",
        "aderezo",
        "extra"
      ],
      required: true
    },
    extraCost: {
      type: Number,
      default: 0
    },
    available: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);