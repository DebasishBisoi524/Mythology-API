const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const Fact = require("./models/Fact");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ➤ API Routes

// Get all facts
app.get("/api/facts", async (req, res) => {
  const facts = await Fact.find();
  res.json(facts);
});

// Get a random fact
app.get("/api/facts/random", async (req, res) => {
  const count = await Fact.countDocuments();
  const random = Math.floor(Math.random() * count);
  const fact = await Fact.findOne().skip(random);
  res.json(fact);
});

// Add new fact
app.post("/api/facts", async (req, res) => {
  try {
    const newFact = new Fact({ fact: req.body.fact });
    await newFact.save();
    res.status(201).json(newFact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a fact
app.put("/api/facts/:id", async (req, res) => {
  try {
    const updated = await Fact.findByIdAndUpdate(
      req.params.id,
      { fact: req.body.fact },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a fact
app.delete("/api/facts/:id", async (req, res) => {
  try {
    await Fact.findByIdAndDelete(req.params.id);
    res.json({ message: "Fact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Serve frontend (optional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
