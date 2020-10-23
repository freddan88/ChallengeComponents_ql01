import React from "react";
import ReactDOM from "react-dom";
import CardBack from "./CardBack";

test("render CardBack without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CardBack />, div);
});
