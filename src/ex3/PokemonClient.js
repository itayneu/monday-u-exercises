import fetch from "node-fetch";

export default class PokemonClient {
  constructor() {
    this.API_BASE = "https://pokeapi.co/api/v2";
  }

  async getPokemon(pokemonId) {
    try {
      const response = await fetch(`${this.API_BASE}/pokemon/${pokemonId}`);
      const pokemon = await response.json();

      return pokemon.name;
    } catch (error) {
      throw `Pokemon with ID ${pokemonId} was not found`;
    }
  }

  async getAllPokemons(pokemonsIds) {
    const allPromises = [];
    let pokemonsNames = [];

    try {
      pokemonsIds.forEach((pokemonId) => {
        allPromises.push(fetch(`${this.API_BASE}/pokemon/${pokemonId}`));
      });

      await Promise.all(allPromises).then((responses) => {
        responses.some((response) => {
          if (!response.ok)
            throw `Failed to fetch pokemon with this input ${pokemonsIds}`;
          const result = response.json();

          result.then((pokemon) => {
            pokemonsNames.push(pokemon.name);
          });
        });
      });

      return pokemonsNames;
    } catch (error) {
      throw `Failed to fetch pokemon with this input ${pokemonsIds}`;
    }
  }
}
