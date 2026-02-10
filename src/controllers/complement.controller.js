const Complement = require("../models/Complement");

exports.getComplements = async (req, res) => {
  const complements = await Complement.find();
  res.json(complements);
};

exports.createComplement = async (req, res) => {
  const complement = new Complement(req.body);
  await complement.save();
  res.status(201).json(complement);
};