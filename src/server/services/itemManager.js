const pokemon = require("../clients/pokemonClient");
const { Items } = require("../db/models");

const pokemonClient = new pokemon();

async function createTodoItem(input) {
  const inputString = input.trim();

  // number
  if (/^[0-9]+$/.test(inputString)) {
    addPokemonTodoItem(inputString);
  }
  // comma separated list of IDs
  else if (/^[0-9, ]+$/.test(inputString)) {
    addPokemonTodoItems(inputString);
  }
  // normal todo
  else {
    addTextTodoItem(inputString);
  }
}

async function addPokemonTodoItem(input) {
  try {
    const pokemon = await pokemonClient.getPokemon(input);
    return await addPokemonItem(pokemon.name);
  } catch (error) {
    return addItem(`Pokemon with ID ${input} was not found`);
  }
}

async function addPokemonTodoItems(input) {
  try {
    const pokemons = await pokemonClient.getAllPokemons(
      input.split(",").map((e) => e.trim())
    );

    pokemons.forEach(async (pokemon) => {
      return await addPokemonItem(pokemon.name);
    });
  } catch (error) {
    return addItem(`Failed to fetch pokemon with this input ${input}`);
  }
}

function addTextTodoItem(input) {
  return addItem(input);
}

async function addItem(item) {
  return await Items.create({ itemName: item });
}

async function addPokemonItem(item) {
  return await addItem(`Catch ${item}`);
}

function getTodoItems() {
  return Items.findAll();
}

async function deleteTodoItem(input) {
  await Items.destroy({
    where: {
      itemName: input,
    },
  });
}

async function updateTodoItem(input) {
  await Items.update(
    { status: input.status },
    {
      where: {
        itemName: input.item,
      },
    }
  );
}

module.exports = {
  createTodoItem,
  getTodoItems,
  deleteTodoItem,
  updateTodoItem,
};
