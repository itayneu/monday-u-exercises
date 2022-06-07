import chalk from "chalk";
import { createReadStream, createWriteStream, writeFile } from "fs";
import PokemonClient from "./PokemonClient.js";

const writer = createWriteStream("todos.txt", { flags: "a" });
const reader = createReadStream("todos.txt", "utf8");
const pokemonClient = new PokemonClient();

export default class ItemManager {
  constructor() {}

  async addTodo(input, options) {
    if (input === "") {
      console.log("Enter a value to add a new todo");
    } else {
      // number
      if (/^[0-9]+$/.test(input)) {
        try {
          const pokemon = await pokemonClient.getPokemon(input);
          this.handleTodo(`catch ${pokemon.name}`, options);
        } catch (error) {
          this.handleTodo(`Pokemon with ID ${input} was not found`, options);
        }
      }
      // comma separated list of IDs
      else if (/^[0-9, ]+$/.test(input)) {
        try {
          const pokemons = await pokemonClient.getAllPokemons(
            input.split(",").map((e) => e.trim())
          );
          pokemons.forEach((pokemon) => {
            this.handleTodo(`catch ${pokemon.name}`, options);
          });
        } catch (error) {
          this.handleTodo(
            `Failed to fetch pokemon with this input ${input}`,
            options
          );
        }
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
    reader.on("data", (chunk) => {
      let dataArray = chunk.split("\n").filter((e) => e !== "");
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
    });
    reader.on("error", (error) => {
      throw error;
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
