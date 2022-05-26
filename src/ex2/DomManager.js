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

    this.updateCounter(todos);
  }

  onTodoClick(todo) {
    alert(todo);
  }

  onTodoDelete(e, todo) {
    e.stopPropagation();
    itemManager.removeTodo(todo);
    this.render(itemManager.todos);
  }

  updateCounter(todos) {
    document.querySelector("#counter").textContent = todos.length;
  }

  getElement(id) {
    return document.querySelector(`#${id}`);
  }
}
