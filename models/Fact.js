const mongoose = require("mongoose");

const factSchema = new mongoose.Schema({
  fact: {
    type: String,
    required: true,
  },
});

const Fact = mongoose.model("Fact", factSchema); // ✅ CORRECT
module.exports = Fact;
