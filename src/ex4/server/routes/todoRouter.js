const express = require("express");
const { createTodo, getTodos, deleteTodo } = require("./api");

const todoRouter = express.Router();

todoRouter.get("/", getTodos);
todoRouter.post("/", createTodo);
todoRouter.delete("/:id", deleteTodo);

module.exports = todoRouter;
