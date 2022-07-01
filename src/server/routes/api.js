const ItemManager = require("../services/itemManager");

async function getItems(req, res) {
  const data = await ItemManager.getTodoItems();
  res.status(200).json(data);
}

async function createItem(req, res) {
  const data = await ItemManager.createTodoItem(req.body.item);
  res.status(200).json(data);
}

async function deleteItem(req, res) {
  const data = await ItemManager.deleteTodoItem(req.body.item);
  res.status(200).json(data);
}

async function updateItem(req, res) {
  const data = await ItemManager.updateTodoItem(req.body);
  res.status(200).json(data);
}

module.exports = {
  createItem,
  deleteItem,
  getItems,
  updateItem,
};
