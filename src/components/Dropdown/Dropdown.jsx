import React, { useContext } from "react";
import { InputContext } from "../../context/InputContext";

const Dropdown = (props) => {
  const { label, boxfor, options, id } = props;
  const [inputData, setInputData] = useContext(InputContext);

  const updateSelectedData = (e) => {
    const data = e.target.value;
    setInputData({ ...inputData, [id]: data.trim() });
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
    <select aria-label={label} onChange={updateSelectedData}>
      <option defaultValue>&#x2713; {boxfor}</option>
      {renderOptions()}
    </select>
  );
};

export default Dropdown;
