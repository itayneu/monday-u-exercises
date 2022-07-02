import actionTypes from "../actions/constants";

const initialState = {
  itemsList: [
    {
      id: 210,
      itemName: "a",
      status: false,
      createdAt: "2022-07-02T13:28:45.000Z",
      updatedAt: "2022-07-02T13:28:45.000Z",
    },
    {
      id: 211,
      itemName: "b",
      status: false,
      createdAt: "2022-07-02T13:46:07.000Z",
      updatedAt: "2022-07-02T13:46:07.000Z",
    },
  ],
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
