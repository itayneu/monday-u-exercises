import actionTypes from "../actions/constants";

const initialState = {
  itemsList: [],
};

const itemsEntitiesReducer = (state = initialState, action) => {
  const { item } = action;
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, itemsList: [...state.itemsList, item] };

    case actionTypes.REMOVE:
      return {
        ...state,
        itemsList: state.itemsList.filter(
          (element) => element.itemName !== item.itemName
        ),
      };

    case actionTypes.UPDATE:
      const foundIndex = state.itemsList.findIndex(
        (element) => element.id === item.id
      );
      state.itemsList[foundIndex] = item;
      return { ...state, itemsList: [...state.itemsList] };

    case actionTypes.LOAD:
      const { itemsList } = action;
      return { ...state, itemsList };

    default:
      return state;
  }
};

export default itemsEntitiesReducer;
