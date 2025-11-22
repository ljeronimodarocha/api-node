module.exports = {
  require: [
    "@babel/register",
    "test/integration/helpers.js"
  ],
  reporter: "spec",
  slow: 5000,
  spec: "test/integration/**/*_spec.js"
};