import React, { Fragment, useContext } from "react";
import { InputContext } from "../../context/InputContext";

const Inputbox = (props) => {
  const { label, id, help, match } = props;
  const [inputData, setInputData] = useContext(InputContext);

  const updateInputData = (e) => {
    const data = e.target.value;
    setInputData({ ...inputData, [id]: data.trim() });
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
      />
    </Fragment>
  );
};

export default Inputbox;
