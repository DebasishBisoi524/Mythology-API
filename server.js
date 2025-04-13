const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors");

// Sample Indian mythology facts database
const mythologyFacts = [
  {
    id: 1,
    fact: "In Hindu mythology, Lord Vishnu's tenth avatar, Kalki, is yet to appear and is prophesied to end the current age of darkness and corruption (Kali Yuga).",
  },
  {
    id: 2,
    fact: "The Ramayana mentions that Hanuman once tried to swallow the sun mistaking it for a fruit when he was a child.",
  },
  {
    id: 3,
    fact: "The Mahabharata is considered the longest epic poem in the world, with over 200,000 verse lines.",
  },
  {
    id: 4,
    fact: "Goddess Saraswati is not only the deity of knowledge but also of music, arts, and all forms of creative expression.",
  },
  {
    id: 5,
    fact: "The churning of the cosmic ocean (Samudra Manthan) produced 14 precious things, including the poison Halahala, which Shiva drank to save the world.",
  },
  {
    id: 6,
    fact: "Lord Krishna delivered the Bhagavad Gita's teachings to Arjuna on the battlefield of Kurukshetra just before the Mahabharata war began.",
  },
  {
    id: 7,
    fact: "The Navagraha temples in Tamil Nadu are dedicated to the nine celestial bodies of Hindu astronomy.",
  },
  {
    id: 8,
    fact: "According to Hindu mythology, the universe undergoes continuous cycles of creation, preservation, and dissolution (known as Yugas).",
  },
  {
    id: 9,
    fact: "The Vamana Avatar of Vishnu covered the entire universe in three steps to subdue the demon king Bali.",
  },
  {
    id: 10,
    fact: "The festival of Onam in Kerala celebrates the annual visit of the mythical King Mahabali to his former kingdom.",
  },
];

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Random fact endpoint
app.get("/api/facts/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * mythologyFacts.length);
  const randomFact = mythologyFacts[randomIndex];
  res.json(randomFact);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
