const express = require("express");
const app = express.Router();

const db = require("../controller/dbController");

app.post("/notes", (req, res) => {
  const body = req.body;
  const id = body.id;
  const parsedId = parseInt(id);
  const checkId = db.GetId(parsedId);

  if (checkId) {
    res.status(409).send("ID is already exist");
  } else {
    db.Add(body);
    res.send(body);
  }
});

module.exports = app;
