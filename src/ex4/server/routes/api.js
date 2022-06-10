// Define your endpoints here (this is your "controller file")
const express = require("express");

const api = express.Router();

api.get("/", getAll);
api.post("/", createTodo);
api.delete("/:id", deleteTodo);

async function getAll(req, res) {
  // let data = await jediService.getAll();
  // if (!data) data = [];
  // res.status(200).json(data);
}

async function createTodo(req, res) {
  console.log("creating a new todo");
  // await jediService.addJedi(req.body);
  // res.status(200).json(req.body);
}

async function deleteTodo(req, res) {
  let todoId = Number.parseInt(req.params.id);
  if (isNaN(todoId))
    try {
      let error = Error("Wrong parameters");
      error.statusCode = 400;
      throw error;
    } catch (e) {
      next(e);
    }

  // const data = await jediService.deleteJedi(todoId);
  // res.status(200).json(data);
}
