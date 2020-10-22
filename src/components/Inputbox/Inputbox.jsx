import React, { Fragment, useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { setData, setFocus } from "../../utils/functions";

const Inputbox = (props) => {
  const {
    id,
    help,
    match,
    label,
    maxCharactersLength,
    minCharactersLength,
  } = props;
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
        id={id}
        type="text"
        title={help}
        pattern={match}
        onFocus={setInputFocus}
        onBlur={resetInputFocus}
        onChange={updateInputData}
        value={inputData[id].value}
        maxLength={maxCharactersLength}
        minLength={minCharactersLength}
      />
    </Fragment>
  );
};

export default Inputbox;
