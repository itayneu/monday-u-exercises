const pokemon = require("../clients/pokemonClient");
const { Items } = require("../db/models");

const pokemonClient = new pokemon();

async function addTodoItem(input) {
  const inputString = input.trim();

  // number
  if (/^[0-9]+$/.test(inputString)) {
    handlePokemonItem(inputString);
  }
  // comma separated list of IDs
  else if (/^[0-9, ]+$/.test(inputString)) {
    handlePokemonItems(inputString);
  }
  // normal todo
  else {
    handleNormalItem(inputString);
  }
}

async function handlePokemonItem(inputString) {
  try {
    const pokemon = await pokemonClient.getPokemon(inputString);
    return await addPokemonItem(pokemon.name);
  } catch (error) {
    return addItem(`Pokemon with ID ${inputString} was not found`);
  }
}

async function handlePokemonItems(inputString) {
  try {
    const pokemons = await pokemonClient.getAllPokemons(
      inputString.split(",").map((e) => e.trim())
    );

    pokemons.forEach(async (pokemon) => {
      return await addPokemonItem(pokemon.name);
    });
  } catch (error) {
    return addItem(`Failed to fetch pokemon with this input ${inputString}`);
  }
}

function handleNormalItem(inputString) {
  return addItem(inputString);
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
  console.log("input", input);
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
  addTodoItem,
  getTodoItems,
  deleteTodoItem,
  updateTodoItem,
};
