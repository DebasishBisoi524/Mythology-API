require("dotenv").config({ path: ".env.test" });
const mongoose = require("mongoose");
const Fact = require("../../models/Fact");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("MongoDB Integration Test", () => {
  it("should save and retrieve a fact", async () => {
    const fact = new Fact({ fact: "Integration test fact" });
    await fact.save();
    const found = await Fact.findOne({ fact: "Integration test fact" });
    expect(found).not.toBeNull();
    expect(found.fact).toBe("Integration test fact");
  });
});
