class DomManager {
  render(todos) {
    const ul = document.querySelector("#list");
    ul.innerHTML = "";
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = "list-item";
      li.appendChild(document.createTextNode(todo));
      ul.appendChild(li);

      const span = document.createElement("span");
      span.className = "list-item-delete-button";
      span.appendChild(document.createTextNode("\u00D7"));
      li.appendChild(span);

      // alert todo value on li click
      li.addEventListener("click", ({ target }) => {
        if (target.tagName === "LI") {
          alert(todo);
        }
      });

      // delete todo on span click
      span.addEventListener("click", () => {
        itemManager.removeTodo(todo);
        this.render(itemManager.todos);
      });
    });

    this.updateCounter(todos);
  }

  updateCounter(todos) {
    document.querySelector("#counter").textContent = todos.length;
  }

  getElement(id) {
    return document.querySelector(`#${id}`);
  }
}
