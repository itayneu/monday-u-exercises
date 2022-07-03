import { toast } from "react-toastify";
import actionsTypes from "./constants";
import {
  getItems,
  createItem,
  deleteItem,
  updateItem,
} from "../services/listApiService";

const add = (item) => ({
  type: actionsTypes.ADD,
  item,
});

const remove = (item) => ({
  type: actionsTypes.REMOVE,
  item,
});

const update = (item) => ({
  type: actionsTypes.UPDATE,
  item,
});

const load = (itemsList) => ({
  type: actionsTypes.LOAD,
  itemsList,
});

export const addItemAction = (item) => {
  return async (dispatch) => {
    const response = await createItem(item.itemName);
    if (Array.isArray(response)) {
      response.forEach((element) => {
        dispatch(add(element));
        toast(`"${element.itemName}" added successfully`);
      });
    } else {
      dispatch(add(response));
      toast(`"${response.itemName}" added successfully`);
    }
  };
};

export const removeItemAction = (item) => {
  return async (dispatch) => {
    await deleteItem(item.itemName);
    dispatch(remove(item));
    toast(`"${item.itemName}" deleted successfully`);
  };
};

export const updateItemAction = (item) => {
  return async (dispatch) => {
    await updateItem(item);
    dispatch(update(item));
    toast(`"${item.itemName}" updated successfully`);
  };
};

export const loadItemsListAction = () => {
  return async (dispatch) => {
    const response = await getItems();
    dispatch(load(response));
  };
};
