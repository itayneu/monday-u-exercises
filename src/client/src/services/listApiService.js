import axios from "axios";
import { toast } from "react-toastify";

const API_BASE = "http://localhost:3005";

export async function getItems() {
  try {
    const response = await axios.get(`${API_BASE}/items`);
    const todoItems = response.data;

    return todoItems;
  } catch (error) {
    console.error(error);
    toast.error("An unexpected error occurred. Please try again.");
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

    toast(`${item} added successfully`);

    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("An unexpected error occurred. Please try again.");
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

    toast(`${item} deleted successfully`);

    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("An unexpected error occurred. Please try again.");
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

    toast(`${item.itemName} updated successfully`);

    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("An unexpected error occurred. Please try again.");
  }
}
