const express = require("express");
const app = express.Router();

const db = require("../controller/dbController");

app.get("/notes", (req, res) => {
  let result = db.Get();
  res.send(result);
});

module.exports = app;
