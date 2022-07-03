import axios from "axios";

const API_BASE = "http://localhost:3005";

export async function getItems() {
  try {
    const response = await axios.get(`${API_BASE}/items`);
    const todoItems = response.data;

    return todoItems;
  } catch (error) {
    console.log(error);
  }
}

export async function createItem(item) {
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

export async function deleteItem(item) {
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

export async function updateItem(item) {
  try {
    const response = await axios.put(
      `${API_BASE}/item`,
      JSON.stringify({ item: item.itemName, status: item.status }),
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
