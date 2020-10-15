const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ notes: [] }).write();

function Get() {
  return db.get("notes").value();
}

function GetId(id) {
  return db.get("notes").find({ id }).value();
}

function Add(body) {
  db.get("notes").push(body).write();
}

function Edit(id, body) {
  const parsedId = parseInt(id);
  db.get("notes").find({ id: parsedId }).assign(body).write();
}

function Delete(id) {
  const parsedId = parseInt(id);
  db.get("notes").remove({ id: parsedId }).write();
}

function DeleteAll() {
  db.get("notes").remove({}).write();
}

module.exports = {
  Get,
  Add,
  GetId,
  Edit,
  Delete,
  DeleteAll,
};
