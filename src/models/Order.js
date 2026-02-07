const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  extra: { type: Boolean, default: false }
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  saladType: { type: String, enum: ["individual", "grande"], required: true },
  ingredients: [ingredientSchema],
  protein: ingredientSchema,
  complement: ingredientSchema,
  dressing: {
    name: { type: String, required: true },
    extra: { type: Boolean, default: false },
    type: { type: String, enum: ["revuelto", "aparte"], required: true }
  },
  utensils: { type: String, enum: ["eco", "normal"], required: true },
  extraCost: { type: Number, default: 0 },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["pendiente", "pagado", "asignado"], default: "pendiente" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);