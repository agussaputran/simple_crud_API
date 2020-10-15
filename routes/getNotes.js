const express = require("express");
const app = express.Router();

const db = require("../controller/dbController");

app.get("/notes", (req, res) => {
  const id = req.query.id;
  const parsedId = parseInt(id);
  if (id) {
    res.send(db.GetId(parsedId));
  } else {
    let result = db.Get();
    res.send(result);
  }
});

module.exports = app;
