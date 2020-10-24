import React from "react";
import { InputProvider } from "../../context/InputContext";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component Test", () => {
  test("Render App Component", () => {
    const wrapper = shallow(
      <InputProvider>
        <App />
      </InputProvider>
    );
    expect(wrapper.containsMatchingElement(<App />)).toEqual(true);
  });
});
