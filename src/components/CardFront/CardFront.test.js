import React from "react";
import ReactDOM from "react-dom";
import CardFront from "./CardFront";

test("render CardFront without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CardFront />, div);
});
