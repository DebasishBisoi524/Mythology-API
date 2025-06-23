const request = require("supertest");
const app = require("../server"); // adjust path if needed

describe("Mythology API Endpoints", () => {
  it("GET /api/facts should return all facts", async () => {
    const res = await request(app).get("/api/facts");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("GET /api/facts/random should return one fact", async () => {
    const res = await request(app).get("/api/facts/random");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("fact");
  });

  it("POST /api/facts should add a new fact", async () => {
    const res = await request(app).post("/api/facts").send({
      fact: "Garuda is the mount of Lord Vishnu.",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
  });

  // Add more tests for PUT / DELETE if needed
});
