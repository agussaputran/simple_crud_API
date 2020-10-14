const express = require("express");
const app = express.Router();

const db = require("../controller/dbController");

app.patch("/notes", (req, res) => {
  const body = req.body;
  const id = req.query.id;
  const parsedId = parseInt(id);
  const checkId = db.GetId(parsedId);

  if (checkId) {
    db.Edit(parsedId, body);
    res.send(body);
  } else {
    res.status(404).send("ID is not available");
  }
});

module.exports = app;
