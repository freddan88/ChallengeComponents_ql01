import React, { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { setData, setFocus } from "../../utils/functions";
import "./Dropdown.css";

const Dropdown = (props) => {
  const { label, boxfor, options, id } = props;
  const [inputData, setInputData] = useContext(InputContext);

  const updateSelectedData = (e) => {
    const data = e.target.value;
    const update = setData(id, data, inputData);
    setInputData(update);
  };

  const setBoxFocus = () => {
    const update = setFocus(id, inputData, true);
    setInputData(update);
  };

  const resetBoxFocus = () => {
    const update = setFocus(id, inputData, false);
    setInputData(update);
  };

  const renderOptions = () => {
    return options.map((obj, index) => {
      return (
        <option key={index} value={obj.value}>
          {obj.label}
        </option>
      );
    });
  };

  return (
    <select
      aria-label={label}
      onChange={updateSelectedData}
      onBlur={resetBoxFocus}
      onFocus={setBoxFocus}
      value={inputData[id].value}
    >
      <option defaultValue data="disabled">
        &#x2713; {boxfor}
      </option>
      {renderOptions()}
    </select>
  );
};

export default Dropdown;
