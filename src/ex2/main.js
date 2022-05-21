class Main {
  constructor() {}

  init() {
    const submitButton = domManager.getElement("list-item-submit");
    submitButton.addEventListener("click", () => {
      let input = domManager.getElement("list-item-input").value;

      // number
      if (/^[0-9]+$/.test(input)) {
        pokemonClient.getPokemon(input).then((pokemon) => {
          let item = pokemon.endsWith("was not found")
            ? pokemon // error handling
            : `catch ${pokemon}`; // real pokemon
          this.addAndRenderItem(item);
        });
      }
      // comma separated list of IDs
      else if (/^[0-9, ]+$/.test(input)) {
        pokemonClient
          .getAllPokemons(input.split(",").map((e) => e.trim()))
          .then((pokemons) => {
            // error handling
            if (typeof pokemons === "string") {
              this.addAndRenderItem(pokemons);
            }
            // real pokemons
            else {
              setTimeout(() => {
                pokemons.forEach((pokemon) => {
                  if (pokemon !== undefined)
                    this.addAndRenderItem(`catch ${pokemon}`);
                });
              }, 50);
            }
          });
      }
      // normal todo
      else {
        this.addAndRenderItem(input);
      }

      // reset current todo input
      domManager.getElement("list-item-input").value = "";
    });

    const clearAllButton = domManager.getElement("list-item-clear");
    clearAllButton.addEventListener("click", () => {
      itemManager.removeAllTodos();
      domManager.render(itemManager.todos);
    });
  }

  addAndRenderItem(input) {
    itemManager.addTodo(input);
    console.log(itemManager.todos);
    domManager.render(itemManager.todos);
  }
}

const main = new Main();
const itemManager = new ItemManager();
const domManager = new DomManager();
const pokemonClient = new PokemonClient();

document.addEventListener("DOMContentLoaded", function () {
  main.init();
});
