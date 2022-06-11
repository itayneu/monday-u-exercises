class ItemClient {
  constructor() {}

  async getTodos() {
    try {
      const response = await axios.get("http://localhost:3005/todo");
      const todoItems = response.data;

      console.log(`GET: Here's the list of todos`, todoItems, {
        "Content-Type": "text/plain",
      });

      return todoItems;
    } catch (error) {
      console.log(error);
    }
  }

  async addTodo(todo) {
    try {
      const response = await axios.post("http://localhost:3005/todo", todo, {
        "Content-Type": "text/plain",
      });
      const newTodo = response.data;

      console.log(`Added a new Todo!`, newTodo);

      return newTodo;
    } catch (errors) {
      console.error(errors);
    }
  }

  async deleteTodo(todoId) {
    try {
      const response = await axios.delete(
        `http://localhost:3005/todo/${todoId}`,
        {
          "Content-Type": "text/plain",
        }
      );
      console.log(`Deleted Todo ID: `, todoId);

      return response.data;
    } catch (errors) {
      console.error(errors);
    }
  }
}
