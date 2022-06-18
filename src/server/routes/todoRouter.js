const express = require("express");
const { createItem, getItems, deleteItem, updateItem } = require("./api");
const { validateSchema, todoSchema } = require("../middleware/validation");

const todoRouter = express.Router();

todoRouter.get("/items", getItems);
todoRouter.post("/item", validateSchema(todoSchema), createItem);
todoRouter.delete("/item", validateSchema(todoSchema), deleteItem);
todoRouter.put("/item", updateItem);

module.exports = todoRouter;
