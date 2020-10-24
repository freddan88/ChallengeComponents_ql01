import React from "react";
import { InputProvider } from "../../context/InputContext";
import { getYearRange, getMonthRange } from "../../utils/functions";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";

describe("Dropdown Component Test", () => {
  test("Render Dropdown Component", () => {
    const wrapper = shallow(
      <InputProvider>
        <Dropdown
          options={getMonthRange()}
          label="Expiration Month"
          id="expirationMonth"
          boxfor="Month"
        />
      </InputProvider>
    );
    expect(wrapper.containsMatchingElement(<Dropdown />)).toEqual(true);
  });
});
