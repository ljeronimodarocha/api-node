module.exports = {
  require: [
    "@babel/register",
    "test/unit/helpers.js"
  ],
  reporter: "spec",
  slow: 5000,
  spec: "test/unit/**/*_spec.js"
};