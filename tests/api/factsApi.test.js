const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../server");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Facts API Tests", () => {
  it("GET /api/facts - all facts", async () => {
    const res = await request(app).get("/api/facts");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /api/facts/random - one random fact", async () => {
    const res = await request(app).get("/api/facts/random");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("fact");
  });

  it("POST /api/facts - create a fact", async () => {
    const res = await request(app).post("/api/facts").send({
      fact: "Garuda is the mount of Lord Vishnu.",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
  });
});
