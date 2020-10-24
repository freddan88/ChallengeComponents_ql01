import React from "react";
import { shallow } from "enzyme";
import Inputbox from "./Inputbox";

describe("Inputbox Component Test", () => {
  test("Render Inputbox Component", () => {
    const wrapper = shallow(
      <div>
        <Inputbox
          id="test"
          help="test"
          label="TEST"
          match="^[a-zA-Z\s]+$"
          maxCharactersLength="2"
          minCharactersLength="1"
        />
      </div>
    );
    expect(wrapper.containsMatchingElement(<Inputbox />)).toEqual(true);
  });
});
