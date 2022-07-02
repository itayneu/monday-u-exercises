import actionsTypes from "./constants";

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

export const addAction = (item) => {
  return (dispatch) => {
    dispatch(add(item));
  };
};

export const removeAction = (item) => {
  return (dispatch) => {
    dispatch(remove(item));
  };
};

export const updateAction = (item) => {
  return (dispatch) => {
    dispatch(update(item));
  };
};

export const loadAction = (itemsList) => {
  return (dispatch) => {
    dispatch(load(itemsList));
  };
};
