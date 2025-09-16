const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, "src")));
app.use(express.urlencoded({ extended: true }));

app.get("/user", (req, res) => {
  res.json("Hello User");
});
app.post("/submit", (req, res) => {
  const name = req.body.userName;
  const email = req.body.userEmail;
  res.send(
    `Hello ${name} how are you doing. Your email ${email} is forever ours.`
  );
});

// const currentDir = __dirname; // The directory of the current script
// const filePath = path.resolve(currentDir, "data", "config.json");
// const filePath = path.resolve(__dirname, "public"); // relative path
// const resolvedPath = path.resolve("/var/www", "html", "/public/index.html");
// const resolvedPath = path.resolve("/public/index.html"); // absolute path

// console.log(resolvedPath); // Example: /home/user/project/data/config.json

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
