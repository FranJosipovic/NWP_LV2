const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

app.use(express.static("public"));
const fs = require("fs");
const path = require("path");

app.get("/slike", (req, res) => {
  const dataPath = path.join(__dirname, "images.json");
  const images = JSON.parse(fs.readFileSync(dataPath));
  res.render("slike", { images });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server pokrenut na http://localhost:3000");
});
