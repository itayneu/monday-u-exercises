// Implement the `Main` class here
class Main {
  constructor() {}

  init() {
    const submitButton = domManager.getElement("list-item-submit");
    submitButton.addEventListener("click", () => {
      let input = domManager.getElement("list-item-input").value;

      // number
      if (!isNaN(input)) {
        pokemonClient.getPokemon(input).then((pokemon) => {
          let item =
            pokemon.startsWith("Failed") === "string"
              ? pokemon
              : `catch ${pokemon}`;
          this.addAndRenderItem(item);
        });
      }
      // comma separated list of IDs
      else if (/^[0-9, ]*$/.test(input)) {
        pokemonClient
          .getAllPokemons(input.split(",").map((e) => e.trim()))
          .then((responses) => {
            responses.forEach((response) => {
              const result = response.json();
              result.then((pokemon) => {
                this.addAndRenderItem(`catch ${pokemon.name}`);
              });
            });
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
      // empty todos array
      itemManager.todos.forEach((todo) => {
        itemManager.removeTodo(todo);
      });

      domManager.render(itemManager.todos);
    });
  }

  addAndRenderItem(input) {
    itemManager.addTodo(input);
    domManager.render(itemManager.todos);
  }
}

const main = new Main();
const itemManager = new ItemManager();
const domManager = new DomManager();
const pokemonClient = new PokemonClient();

document.addEventListener("DOMContentLoaded", function () {
  // you should create an `init` method in your class
  // the method should add the event listener to your "add" button
  main.init();
});
