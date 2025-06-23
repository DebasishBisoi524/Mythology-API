const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Fact = require("./models/Fact");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("🌱 MongoDB connected");

    // Read the JSON file
    const data = JSON.parse(fs.readFileSync("mythology_facts.json", "utf-8"));

    // Clear existing and insert new
    await Fact.deleteMany({});
    await Fact.insertMany(data);

    console.log("✅ Database seeded with mythology facts!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seed failed:", err);
  });
