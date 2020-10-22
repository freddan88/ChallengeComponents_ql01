import React, { useState, createContext } from "react";

export const InputContext = createContext();

export const InputProvider = (props) => {
  const [inputData, setInputData] = useState({
    cardNumber: { value: "", focus: false },
    cardName: { value: "", focus: false },
    cardCVV: { value: "", focus: false },
    expirationMonth: { value: "MM", focus: false },
    expirationYear: { value: "YY", focus: false },
  });

  return (
    <InputContext.Provider value={[inputData, setInputData]}>
      {props.children}
    </InputContext.Provider>
  );
};
