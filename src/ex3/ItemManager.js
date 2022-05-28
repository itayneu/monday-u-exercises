class ItemManager {
  constructor() {
    this.todos = [];
    this.pokemonClient = new PokemonClient();
    this.domManager = new DomManager();
  }

  handleTodo(input) {
    // number
    if (/^[0-9]+$/.test(input)) {
      pokemonClient.getPokemon(input).then((pokemon) => {
        let item = pokemon.endsWith("was not found")
          ? pokemon // error handling
          : `catch ${pokemon}`; // real pokemon
        this.addTodo(item);
      });
    }
    // comma separated list of IDs
    else if (/^[0-9, ]+$/.test(input)) {
      pokemonClient
        .getAllPokemons(input.split(",").map((e) => e.trim()))
        .then((pokemons) => {
          // error handling
          if (typeof pokemons === "string") {
            this.addTodo(pokemons);
          }
          // real pokemons
          else {
            setTimeout(() => {
              pokemons.forEach((pokemon) => {
                if (pokemon !== undefined) this.addTodo(`catch ${pokemon}`);
              });
            }, 50);
          }
        });
    }
    // normal todo
    else {
      this.addTodo(input);
    }
  }

  addTodo(todo) {
    if (todo === "") {
      alert("Add a value to create a new todo");
    } else if (this.todos.includes(todo)) {
      alert(`The task "${todo}" is already in the list`);
    } else {
      this.todos.push(todo);
      this.domManager.render(this.todos);
    }
  }

  removeTodo(todo) {
    this.todos = this.todos.filter((e) => e !== todo);
  }
}
