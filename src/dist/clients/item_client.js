const API_BASE = "http://localhost:3005";

class ItemClient {
  async getItems() {
    try {
      const response = await axios.get(`${API_BASE}/items`);
      const todoItems = response.data;

      return todoItems;
    } catch (error) {
      console.log(error);
    }
  }

  async addItem(item) {
    try {
      const response = await axios.post(
        `${API_BASE}/item`,
        JSON.stringify({ item }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (errors) {
      console.error(errors);
    }
  }

  async deleteItem(item) {
    try {
      const response = await axios.delete(`${API_BASE}/item`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ item }),
      });

      return response.data;
    } catch (errors) {
      console.error(errors);
    }
  }
}
