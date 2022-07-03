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
    response !== "" && dispatch(add(response));
  };
};

export const removeItemAction = (item) => {
  return async (dispatch) => {
    await deleteItem(item.itemName);
    dispatch(remove(item));
  };
};

export const updateItemAction = (item) => {
  return async (dispatch) => {
    await updateItem(item);
    dispatch(update(item));
  };
};

export const loadItemsListAction = () => {
  return async (dispatch) => {
    const response = await getItems();
    dispatch(load(response));
  };
};
