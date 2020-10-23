import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

test("render Card without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
});
