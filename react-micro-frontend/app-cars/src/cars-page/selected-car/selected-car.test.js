import SelectedPlanet from "./selected-planet.component.js";
import React from "react";
import renderer from "react-test-renderer";

describe("selected-planet", () => {
  it("should render when no car is selected", () => {
    const tree = renderer.create(<SelectedPlanet />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
