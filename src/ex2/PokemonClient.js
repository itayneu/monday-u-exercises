class PokemonClient {
  constructor() {
    this.API_BASE = "https://pokeapi.co/api/v2";
  }

  async getPokemon(pokemonId) {
    try {
      const response = await fetch(`${this.API_BASE}/pokemon/${pokemonId}`);
      const result = await response.json();
      return result.name;
    } catch (error) {
      const errorMessage = `Pokemon with ID ${pokemonId} was not found`;
      console.log(errorMessage);
      return errorMessage;
    }
  }

  async getAllPokemons(pokemonsIds) {
    const allPromises = [];
    try {
      pokemonsIds.forEach((pokemonId) => {
        allPromises.push(fetch(`${this.API_BASE}/pokemon/${pokemonId}`));
      });
      const allPokemons = await Promise.all(allPromises);
      return allPokemons;
    } catch (error) {
      const errorMessage = `Failed to fetch pokemon with this input ${pokemonsIds}`;
      console.log(errorMessage);
      return errorMessage;
    }
  }
}
