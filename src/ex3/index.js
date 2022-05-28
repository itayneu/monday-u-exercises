import chalk from "chalk";
import { Command } from "commander";
const program = new Command();

program.name("shuki").description("Shuki - a CLI todo app").version("1.0.0");

program
  .command("add")
  .description("Add todo item")
  .argument("<string>", "todo")
  .option("-c, --color <string>", "Result color", "white")
  .action((todo, options) => {
    console.log(chalk[options.color](`add ${todo}`));
  });

program
  .command("get")
  .description("Get todo items")
  .option("-c, --color <string>", "Result color", "white")
  .action((options) => {
    console.log(chalk[options.color](`get`));
  });

program
  .command("delete")
  .description("Delete todo item")
  .argument("<string>", "todo")
  .option("-c, --color <string>", "Result color", "white")
  .action((todo, options) => {
    console.log(chalk[options.color](`delete ${todo}`));
  });

program.parse();
