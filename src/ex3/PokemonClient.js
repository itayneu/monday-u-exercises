import fetch from "node-fetch";

export default class PokemonClient {
  constructor() {
    this.API_BASE = "https://pokeapi.co/api/v2/pokemon";
  }

  async getPokemon(pokemonId) {
    try {
      const response = await fetch(`${this.API_BASE}/${pokemonId}`);
      const pokemon = await response.json();

      return pokemon;
    } catch (error) {
      throw error;
    }
  }

  async getAllPokemons(pokemonsIds) {
    const allPromises = [];

    try {
      pokemonsIds.forEach((pokemonId) => {
        allPromises.push(fetch(`${this.API_BASE}/${pokemonId}`));
      });

      const responses = await Promise.all(allPromises);
      const pokemons = await Promise.all(
        responses.map((response) => response.json())
      );

      return pokemons;
    } catch (error) {
      throw error;
    }
  }
}
