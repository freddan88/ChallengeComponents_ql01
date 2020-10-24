import React from "react";
import { shallow } from "enzyme";
import CardFront from "./CardFront";

describe("CardFront Component Test", () => {
  test("Render CardFront Component", () => {
    const wrapper = shallow(
      <div>
        <CardFront
          dateFieldClass="test"
          nameFieldClass="test"
          numberFieldClass="test"
          cleanNumberValue="32"
          cleanNameValue="Fredrik Leemann"
          cleanMonthValue="10"
          cleanYearValue="2020"
          brand="Visa"
        />
      </div>
    );
    expect(wrapper.containsMatchingElement(<CardFront />)).toEqual(true);
  });
});
