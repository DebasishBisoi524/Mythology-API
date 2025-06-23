# 🌟 Indian Mythology Facts API

A custom-built Express.js + MongoDB API that delivers fascinating Indian mythology facts. This project supports full CRUD operations and features a clean frontend to display random facts.

---

## 🧠 Project Overview

This is a submission for **Task 1: Build Your Own API Server**, where the goal was to:

- ✅ Create a custom backend API with 4+ endpoints
- ✅ Integrate a database (MongoDB)
- ✅ Provide full CRUD support
- ✅ Optionally add a frontend (included!)
- ✅ Document and test the API

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Frontend:** HTML, CSS, JavaScript
- **Tools:** dotenv, cors

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YourUsername/Mythology-API.git
cd Mythology-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up `.env`

Create a file named `.env` in the root directory:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mythologyDB
```

### 4. Seed the Database

```bash
node seed.js
```

> This will load the `mythology_facts.json` file into your MongoDB collection.

### 5. Start the Server

```bash
node server.js
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 📄 API Documentation

### Base URL: `http://localhost:3000`

| Method | Endpoint            | Description                     |
| ------ | ------------------- | ------------------------------- |
| GET    | `/api/facts`        | Get all mythology facts         |
| GET    | `/api/facts/random` | Get a random mythology fact     |
| POST   | `/api/facts`        | Add a new mythology fact        |
| PUT    | `/api/facts/:id`    | Update a fact by its MongoDB ID |
| DELETE | `/api/facts/:id`    | Delete a fact by its MongoDB ID |

---

## 🧪 Example Requests (via `curl`)

### ➤ Get All Facts

```bash
curl http://localhost:3000/api/facts
```

### ➤ Get a Random Fact

```bash
curl http://localhost:3000/api/facts/random
```

### ➤ Add a New Fact

```bash
curl -X POST http://localhost:3000/api/facts -H "Content-Type: application/json" -d '{"fact": "Ganesha wrote the Mahabharata as Vyasa dictated it."}'
```

### ➤ Update a Fact

```bash
curl -X PUT http://localhost:3000/api/facts/<fact_id> -H "Content-Type: application/json" -d '{"fact": "Updated mythological fact"}'
```

### ➤ Delete a Fact

```bash
curl -X DELETE http://localhost:3000/api/facts/<fact_id>
```

---

## 💻 Frontend

Located at `public/index.html`. Features:

- Auto-refreshes every 5 seconds to show new facts
- Includes a manual refresh button
- Uses `fetch()` to hit the `/api/facts/random` endpoint

---

## 📁 Project Structure

```
mythology-api/
├── models/Fact.js              # Mongoose schema
├── public/index.html           # Frontend UI
├── mythology_facts.json        # Seed data
├── seed.js                     # Seeder script
├── server.js                   # Express server
├── .env                        # Environment config (add manually)
├── package.json
└── README.md                   # This file
```

---

## ✅ Completed Requirements

- ✔️ 4+ API endpoints (CRUD)
- ✔️ Integrated database with Mongoose
- ✔️ Frontend to fetch & display data
- ✔️ Auto data seeding
- ✔️ Clear documentation

---

## 📄 License

MIT

---

> ✨ Built with ❤️ as part of the "Build Your Own API Server" challenge
