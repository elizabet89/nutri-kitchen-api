const mongoose = require("mongoose");

const complementSchema = new mongoose.Schema( {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
     type: {
      type: String,
      enum: ["complemento"], // Ya no necesitamos todos los tipos, solo "proteina"
      required: true,
    },
    extraCost: {
      type: Number,
      required: true,
      min: 0,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Complement", complementSchema);