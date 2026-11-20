
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  testMatch: [
    "**/src/**/*.test.jsx"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"]
};
