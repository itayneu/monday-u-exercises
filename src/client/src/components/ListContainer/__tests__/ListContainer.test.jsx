/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListContainer from "../ListContainer";
import { Provider } from "react-redux";
import { store } from "../../../store";
import * as requests from "../../../services/listApiService";
import { loadItemsListAction } from "../../../actions/itemsEntitiesActions";

const items = [
  {
    id: 56,
    itemName: "Take dog out for a walk",
    status: false,
    createdAt: "2022-07-08T17:18:41.000Z",
    updatedAt: "2022-07-08T17:18:41.000Z",
  },
  {
    id: 32,
    itemName: "Do the dishes",
    status: true,
    createdAt: "2022-07-08T17:18:39.000Z",
    updatedAt: "2022-07-08T17:18:43.000Z",
  },
];

describe("ListContainer", () => {
  test("should render both items (one done and one not)", () => {
    render(
      <Provider store={store}>
        <ListContainer
          itemsList={items}
          loadItemsListAction={jest.fn(() => items)}
        />
      </Provider>
    );

    expect(screen.getByText("Take dog out for a walk")).toBeInTheDocument();
    expect(
      screen.getByText("Do the dishes (Done: 8.7.2022, 20:18:43)")
    ).toBeInTheDocument();
  });

  // test("get", async () => {
  //   const mockRequest = jest
  //     .spyOn(requests, "getItems")
  //     .mockImplementation(() => {
  //       return [
  //         {
  //           id: 511,
  //           itemName: "yo",
  //           status: true,
  //           createdAt: "2022-07-08T17:18:39.000Z",
  //           updatedAt: "2022-07-08T17:18:43.000Z",
  //         },
  //       ];
  //     });

  //   await loadItemsListAction();

  //   expect(mockRequest).toBeCalledWith({
  //     id: 511,
  //     itemName: "yo",
  //     status: true,
  //     createdAt: "2022-07-08T17:18:39.000Z",
  //     updatedAt: "2022-07-08T17:18:43.000Z",
  //   });
  // });
});
