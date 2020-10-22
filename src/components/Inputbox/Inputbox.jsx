import React, { Fragment, useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { setData, setFocus } from "../../utils/functions";

const Inputbox = (props) => {
  const { label, id, help, match } = props;
  const [inputData, setInputData] = useContext(InputContext);

  const updateInputData = (e) => {
    const data = e.target.value;
    const update = setData(id, data, inputData);
    setInputData(update);
  };

  const setInputFocus = () => {
    const update = setFocus(id, inputData, true);
    setInputData(update);
  };

  const resetInputFocus = () => {
    const update = setFocus(id, inputData, false);
    setInputData(update);
  };

  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        pattern={match}
        title={help}
        id={id}
        onChange={updateInputData}
        onBlur={resetInputFocus}
        onFocus={setInputFocus}
        value={inputData[id].value}
      />
    </Fragment>
  );
};

export default Inputbox;
