import React from "react";
import ReactDOM from "react-dom";
import { InputProvider } from "./context/InputContext";
import { App } from "./components/exports";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <InputProvider>
      <App />
    </InputProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
