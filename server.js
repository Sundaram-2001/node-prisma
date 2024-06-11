const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(express.json());
app.use(bodyParser.urlencoded({ extnded: true }));
const { getAll, addData, updateData, deleteData } = require("./db");
app.get("/", getAll);
app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "add.html"));
});
app.get("/update", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "update.html"));
});
app.post("/update", updateData);
app.post("/add", addData);
app.get("/delete", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "delete.html"));
});
app.post("/delete", deleteData);
app.listen(8080, () => {
  console.log("Server started on 8080..");
});
