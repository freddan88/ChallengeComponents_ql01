import React from "react";
import ReactDOM from "react-dom";
import { InputProvider } from "../../context/InputContext";
import Dropdown from "./Dropdown";

test("render Dropdown without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <InputProvider>
      <Dropdown />
    </InputProvider>,
    div
  );
});
