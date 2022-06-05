import chalk from "chalk";
import { createReadStream, createWriteStream, readFile, writeFile } from "fs";
import PokemonClient from "./PokemonClient.js";

const writer = createWriteStream("todos.txt", { flags: "a" });
const reader = createReadStream("todos.txt", "utf8");
const pokemonClient = new PokemonClient();

export default class ItemManager {
  constructor() {}

  addTodo(input, options) {
    if (input === "") {
      console.log("Enter a value to add a new todo");
    } else {
      // number
      if (/^[0-9]+$/.test(input)) {
        pokemonClient.getPokemon(input).then(
          (pokemon) => {
            this.handleTodo(`catch ${pokemon}`, options);
          },
          (error) => console.log(error)
        );
      }
      // comma separated list of IDs
      else if (/^[0-9, ]+$/.test(input)) {
        pokemonClient
          .getAllPokemons(input.split(",").map((e) => e.trim()))
          .then(
            (pokemons) => {
              setTimeout(() => {
                pokemons.forEach((pokemon) => {
                  if (pokemon !== undefined) {
                    this.handleTodo(`catch ${pokemon}`, options);
                  }
                });
              }, 50);
            },
            (error) => console.log(error)
          );
      }
      // normal todo
      else {
        this.handleTodo(input, options);
      }
    }
  }

  getTodos(options) {
    reader.on("data", (chunk) => {
      this.printWithColor(chunk, options);
    });
    reader.on("error", (error) => {
      throw error;
    });
  }

  deleteTodo(input, options) {
    readFile("todos.txt", "utf8", (error, data) => {
      if (error) throw error;
      else {
        let dataArray = data.split("\n").filter((e) => e !== "");
        const todoIndex = /^[0-9]+$/.test(input)
          ? input // numeric value (index)
          : dataArray.findIndex((elem) => elem === input); // text value

        if (todoIndex < 0 || todoIndex >= dataArray.length) {
          console.log(`Todo "${input}" does not exist`);
          return;
        }

        dataArray.splice(todoIndex, 1);
        dataArray[dataArray.length - 1] += "\n";
        const dataAfterDelete = dataArray.join("\n");

        writeFile("todos.txt", dataAfterDelete, (error) => {
          if (error) throw error;
          this.printWithColor(`Todo "${input}" deleted successfully`, options);
        });
      }
    });
  }

  handleTodo(input, options) {
    writer.write(`${input}\n`);
    this.printWithColor(`Todo "${input}" added successfully`, options);
  }

  printWithColor(input, options) {
    console.log(chalk[options.color](input));
  }
}
