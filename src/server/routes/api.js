const ItemManager = require("../services/item_manager");

async function getItems(req, res) {
  const data = await ItemManager.getTodoItems();

  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}

async function createItem(req, res) {
  const data = await ItemManager.addTodoItem(req.body.item);

  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}

async function deleteItem(req, res) {
  const data = await ItemManager.deleteTodoItem(req.body.item);

  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}

module.exports = {
  createItem,
  deleteItem,
  getItems,
};
