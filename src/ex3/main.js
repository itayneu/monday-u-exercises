class Main {
  constructor() {}

  init() {
    const submitButton = domManager.getElement("list-item-submit");
    submitButton.addEventListener("click", () => {
      domManager.onTodoAdd();
    });

    const clearAllButton = domManager.getElement("list-item-clear");
    clearAllButton.addEventListener("click", () => {
      domManager.onTodosClearAll();
    });
  }
}

const main = new Main();
const itemManager = new ItemManager();
const domManager = new DomManager();
const pokemonClient = new PokemonClient();

document.addEventListener("DOMContentLoaded", function () {
  main.init();
});
