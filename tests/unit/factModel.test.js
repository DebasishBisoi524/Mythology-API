const Fact = require("../../models/Fact");

describe("Fact Model Unit Test", () => {
  it("should create a fact instance", () => {
    const fact = new Fact({ fact: "Lord Vishnu has 10 avatars" });
    expect(fact.fact).toBe("Lord Vishnu has 10 avatars");
  });
});
