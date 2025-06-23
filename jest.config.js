module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["server.js", "models/**/*.js", "routes/**/*.js"],
  coverageDirectory: "coverage",
};
