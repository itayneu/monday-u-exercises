const { Items } = require("../db/models");
const PokemonClient = require("../clients/pokemonClient");

class ItemManager {
  constructor() {
    this.pokemonClient = new PokemonClient();
  }

  createTodoItem = async (inputString) => {
    // number
    if (/^[0-9]+$/.test(inputString)) {
      return await this.addPokemonTodoItem(inputString);
    }
    // comma separated list of IDs
    else if (/^[0-9, ]+$/.test(inputString)) {
      return await this.addPokemonTodoItems(inputString);
    }
    // normal todo
    else {
      return await this.addItem(inputString);
    }
  };

  addPokemonTodoItem = async (input) => {
    try {
      const pokemon = await this.pokemonClient.getPokemon(input);
      return await this.addPokemonItem(pokemon.name);
    } catch (error) {
      return await this.addItem(`Pokemon with ID ${input} was not found`);
    }
  };

  addPokemonTodoItems = async (input) => {
    try {
      const pokemons = await this.pokemonClient.getAllPokemons(
        input.split(",").map((e) => e.trim())
      );

      pokemons.forEach(async (pokemon) => {
        return await this.addPokemonItem(pokemon.name);
      });
    } catch (error) {
      return await this.addItem(
        `Failed to fetch pokemon with this input ${input}`
      );
    }
  };

  addItem = async (item) => {
    return await Items.create({ itemName: item });
  };

  addPokemonItem = async (item) => {
    return await this.addItem(`Catch ${item}`);
  };

  getTodoItems = async () => {
    return await Items.findAll();
  };

  deleteTodoItem = async (input) => {
    return await Items.destroy({
      where: {
        itemName: input,
      },
    });
  };

  updateTodoItem = async (input) => {
    return await Items.update(
      { status: input.status },
      {
        where: {
          itemName: input.item,
        },
      }
    );
  };
}

module.exports = new ItemManager();
