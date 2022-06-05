import { Command } from "commander";
import ItemManager from "./ItemManager.js";

const program = new Command();
const itemManager = new ItemManager();

program.name("shuki").description("Shuki - a CLI todo app").version("1.0.0");

program
  .command("add")
  .description(
    "Add todo item - text for task, comma seperated list of numbers for Pokemon catching"
  )
  .argument("<string>", "todo")
  .option("-c, --color <string>", "Result color", "white")
  .action((todo, options) => {
    itemManager.addTodo(todo, options);
  });

program
  .command("get")
  .description("Get todo items - All todos from todos.txt")
  .option("-c, --color <string>", "Result color", "white")
  .action((options) => {
    itemManager.getTodos(options);
  });

program
  .command("delete")
  .description("Delete todo item - text or index in todos.txt file")
  .argument("<string>", "todo")
  .option("-c, --color <string>", "Result color", "white")
  .action((todo, options) => {
    itemManager.deleteTodo(todo, options);
  });

program.parse();
