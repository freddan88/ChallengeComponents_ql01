import React from "react";
import { InputProvider } from "../../context/InputContext";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card Component Test", () => {
  test("Render Card Component", () => {
    const wrapper = shallow(
      <InputProvider>
        <Card />
      </InputProvider>
    );
    expect(wrapper.containsMatchingElement(<Card />)).toEqual(true);
  });
});
