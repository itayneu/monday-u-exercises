/**
 * @jest-environment jsdom
 */

import React from "react";
import renderer from "react-test-renderer";
import ListItem from "../ListItem";

const item = {
  id: 512,
  itemName: "Catch bulbasaur",
  status: false,
  createdAt: "2022-07-08T17:18:41.000Z",
  updatedAt: "2022-07-08T17:18:41.000Z",
};

test("renders correctly above limit", () => {
  const tree = renderer.create(<ListItem item={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});
