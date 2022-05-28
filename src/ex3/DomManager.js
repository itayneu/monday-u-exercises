class DomManager {
  render(todos) {
    const ul = document.querySelector("#list");
    ul.innerHTML = "";
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = "list-item";
      li.appendChild(document.createTextNode(todo));
      ul.appendChild(li);

      const deleteImg = document.createElement("img");
      deleteImg.src = "images/delete_icon.svg";
      deleteImg.className = "list-item-delete-button";
      li.appendChild(deleteImg);

      // alert todo value on li click
      li.addEventListener("click", () => {
        this.onTodoClick(todo);
      });

      // delete todo on span click
      deleteImg.addEventListener("click", (e) => {
        this.onTodoDelete(e, todo);
      });
    });

    this.onTodosCounterUpdate(todos);
  }

  onTodoAdd() {
    let input = this.getElement("list-item-input").value;
    itemManager.handleTodo(input);

    // reset current todo input
    this.getElement("list-item-input").value = "";
  }

  onTodoClick(todo) {
    alert(todo);
  }

  onTodoDelete(e, todo) {
    e.stopPropagation();
    itemManager.removeTodo(todo);
    this.render(itemManager.todos);
  }

  onTodosCounterUpdate(todos) {
    document.querySelector("#counter").textContent = todos.length;
  }

  onTodosClearAll() {
    itemManager.todos = [];
    this.render(itemManager.todos);
  }

  getElement(id) {
    return document.querySelector(`#${id}`);
  }
}
