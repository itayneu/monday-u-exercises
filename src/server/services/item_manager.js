const fs = require("fs").promises;
const pokemon_client = require("../clients/pokemon_client");

const pokemonClient = new pokemon_client();
const todoFile = "todo_list.json";

async function addTodoItem(input) {
  const inputString = input.trim();
  let dataArray = await getTodoItems();

  if (!dataArray) dataArray = [];
  // number
  if (/^[0-9]+$/.test(inputString)) {
    handlePokemonItem(inputString, dataArray);
  }
  // comma separated list of IDs
  else if (/^[0-9, ]+$/.test(inputString)) {
    handlePokemonItems(inputString, dataArray);
  }
  // normal todo
  else {
    handleNormalItem(inputString, dataArray);
  }
}

async function handlePokemonItem(inputString, dataArray) {
  try {
    const pokemon = await pokemonClient.getPokemon(inputString);
    return await addPokemonItem(pokemon.name, dataArray);
  } catch (error) {
    return addItem(`Pokemon with ID ${inputString} was not found`, dataArray);
  }
}

async function handlePokemonItems(inputString, dataArray) {
  try {
    const pokemons = await pokemonClient.getAllPokemons(
      inputString.split(",").map((e) => e.trim())
    );

    pokemons.forEach(async (pokemon) => {
      return await addPokemonItem(pokemon.name, dataArray);
    });
  } catch (error) {
    return addItem(
      `Failed to fetch pokemon with this input ${inputString}`,
      dataArray
    );
  }
}

function handleNormalItem(inputString, dataArray) {
  return addItem(inputString, dataArray);
}

async function addItem(item, dataArray) {
  const todoJson = {
    id: Math.max(...dataArray.map((elem) => elem.id), 0) + 1,
    todo: item,
  };
  dataArray.push(todoJson);
  await writeTodoFile(dataArray);
  return todoJson;
}

async function addPokemonItem(item, dataArray) {
  return await addItem(`catch ${item}`, dataArray);
}

async function getTodoItems() {
  return await readTodoFile();
}

async function deleteTodoItem(input) {
  let dataArray = await getTodoItems();
  dataArray = dataArray.filter((i) => i.todo !== input);

  await writeTodoFile(dataArray);
}

async function readTodoFile() {
  try {
    const dataArray = await fs.readFile(todoFile);
    return JSON.parse(dataArray.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function writeTodoFile(content) {
  try {
    await fs.writeFile(todoFile, JSON.stringify(content));
  } catch (error) {
    console.error(`Failed to write to file ${error.message}`);
  }
}

module.exports = {
  addTodoItem,
  getTodoItems,
  deleteTodoItem,
};
