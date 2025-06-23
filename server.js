const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const Fact = require("./models/Fact");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🌱 MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/api/facts", async (req, res) => {
  try {
    const facts = await Fact.find();
    res.json(facts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving facts", error });
  }
});

app.get("/api/facts/random", async (req, res) => {
  try {
    const count = await Fact.countDocuments();
    const random = Math.floor(Math.random() * count);
    const fact = await Fact.findOne().skip(random);
    res.json(fact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching random fact", error });
  }
});

app.post("/api/facts", async (req, res) => {
  try {
    const newFact = new Fact({ fact: req.body.fact });
    const saved = await newFact.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: "Error saving fact", error });
  }
});

app.put("/api/facts/:id", async (req, res) => {
  try {
    const updated = await Fact.findByIdAndUpdate(
      req.params.id,
      { fact: req.body.fact },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Fact not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating fact", error });
  }
});

app.delete("/api/facts/:id", async (req, res) => {
  try {
    const deleted = await Fact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Fact not found" });
    res.json({ message: "Fact deleted" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting fact", error });
  }
});

// Serve Frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Export app for testing
module.exports = app;

// Start server if not imported (i.e., not in test mode)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}
