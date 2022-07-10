/**
 * @jest-environment jsdom
 */

import React from "react";
import renderer from "react-test-renderer";
import About from "../About";

test("renders correctly above limit", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
