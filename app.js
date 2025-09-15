const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  res.json("Hello Namraj");
});
app.post("/submit", (req, res) => {
  res.json("Hello Namraj");
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
