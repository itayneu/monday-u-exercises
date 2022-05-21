// Implement the `Main` class here
class Main {
  constructor() {}

  init() {
    const submitButton = domManager.getElement("list-item-submit");
    submitButton.addEventListener("click", () => {
      let currentTodo = domManager.getElement("list-item-input").value;

      // add todo to current todos array and render
      itemManager.addTodo(currentTodo);
      domManager.render(itemManager.todos);

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
}

const main = new Main();
const itemManager = new ItemManager([]);
const domManager = new DomManager();

document.addEventListener("DOMContentLoaded", function () {
  // you should create an `init` method in your class
  // the method should add the event listener to your "add" button
  main.init();
});
