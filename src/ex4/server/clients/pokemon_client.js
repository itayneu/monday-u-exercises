const axios = require("axios");

class PokemonClient {
  constructor() {
    this.API_BASE = "https://pokeapi.co/api/v2/pokemon";
  }

  async getPokemon(pokemonId) {
    const response = await axios.get(`${this.API_BASE}/${pokemonId}`);

    return response.data;
  }

  async getAllPokemons(pokemonsIds) {
    const allPromises = pokemonsIds.map((pokemonId) =>
      axios.get(`${this.API_BASE}/${pokemonId}`)
    );

    const responses = await Promise.all(allPromises);
    const pokemons = responses.map((response) => response.data);

    return pokemons;
  }
}

module.exports = PokemonClient;
