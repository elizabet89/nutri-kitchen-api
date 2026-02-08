const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    telefono: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["admin", "cliente"],
      default: "cliente"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);