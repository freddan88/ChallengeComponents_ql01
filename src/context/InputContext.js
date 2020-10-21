import React, { useState, createContext } from "react";

export const InputContext = createContext();

export const InputProvider = (props) => {
  const [inputData, setInputData] = useState({});

  return (
    <InputContext.Provider value={[inputData, setInputData]}>
      {props.children}
    </InputContext.Provider>
  );
};
