const axios = require("axios");

export default class PokemonClient {
  constructor() {
    this.API_BASE = "https://pokeapi.co/api/v2/pokemon";
  }

  async getPokemon(pokemonId) {
    try {
      const response = await axios.get(`${this.API_BASE}/${pokemonId}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getAllPokemons(pokemonsIds) {
    const allPromises = [];

    try {
      pokemonsIds.forEach((pokemonId) => {
        allPromises.push(axios.get(`${this.API_BASE}/${pokemonId}`));
      });

      const responses = await Promise.all(allPromises);
      const pokemons = responses.map((response) => response.data);

      return pokemons;
    } catch (error) {
      throw error;
    }
  }
}
