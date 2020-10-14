const express = require("express");
const app = express.Router();

const db = require("../controller/dbController");

app.delete("/notes", (req, res) => {
  const query = req.query;
  const id = query.id;
  const parsedId = parseInt(id);
  const checkId = db.GetId(parsedId);

  if (checkId) {
    db.Delete(parsedId);
    res.send("Ok");
  } else {
    res.status(404).send("ID is not available");
  }
});

module.exports = app;
