import reducer from "../itemsEntitiesReducer";
import actionTypes from "../../actions/constants";

describe("items entities reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ itemsList: [] });
  });

  it("should handle ADD", () => {
    const addAction = {
      type: actionTypes.ADD,
      item: {
        id: 512,
        itemName: "Catch bulbasaur",
        status: false,
        createdAt: "2022-07-08T17:18:41.000Z",
        updatedAt: "2022-07-08T17:18:41.000Z",
      },
    };

    expect(reducer({ itemsList: [] }, addAction)).toEqual({
      itemsList: [
        {
          id: 512,
          itemName: "Catch bulbasaur",
          status: false,
          createdAt: "2022-07-08T17:18:41.000Z",
          updatedAt: "2022-07-08T17:18:41.000Z",
        },
      ],
    });
  });

  it("should handle REMOVE", () => {
    const removeAction = {
      type: actionTypes.REMOVE,
      item: {
        id: 512,
        itemName: "Catch bulbasaur",
        status: false,
        createdAt: "2022-07-08T17:18:41.000Z",
        updatedAt: "2022-07-08T17:18:41.000Z",
      },
    };

    expect(
      reducer(
        {
          itemsList: [
            {
              id: 512,
              itemName: "Catch bulbasaur",
              status: false,
              createdAt: "2022-07-08T17:18:41.000Z",
              updatedAt: "2022-07-08T17:18:41.000Z",
            },
          ],
        },
        removeAction
      )
    ).toEqual({
      itemsList: [],
    });
  });

  it("should handle UPDATE", () => {
    const updateAction = {
      type: actionTypes.UPDATE,
      item: {
        id: 512,
        itemName: "Catch bulbasaur",
        status: true,
        createdAt: "2022-07-08T17:18:41.000Z",
        updatedAt: "2022-07-08T17:18:41.000Z",
      },
    };

    expect(
      reducer(
        {
          itemsList: [
            {
              id: 512,
              itemName: "Catch bulbasaur",
              status: false,
              createdAt: "2022-07-08T17:18:41.000Z",
              updatedAt: "2022-07-08T17:18:41.000Z",
            },
          ],
        },
        updateAction
      )
    ).toEqual({
      itemsList: [
        {
          id: 512,
          itemName: "Catch bulbasaur",
          status: true,
          createdAt: "2022-07-08T17:18:41.000Z",
          updatedAt: "2022-07-08T17:18:41.000Z",
        },
      ],
    });
  });
});
