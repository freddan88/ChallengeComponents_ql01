import React from "react";
import { shallow } from "enzyme";
import CardBack from "./CardBack";

describe("CardBack Component Test", () => {
  test("Render CardBack Component", () => {
    const wrapper = shallow(
      <div>
        <CardBack brand="Visa" cleanCVVData="0123" />
      </div>
    );
    expect(wrapper.containsMatchingElement(<CardBack />)).toEqual(true);
  });
});
