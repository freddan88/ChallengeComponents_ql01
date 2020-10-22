import React, { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import DOMPurify from "dompurify";
import { CardFront, CardBack } from "../exports";
import "./Card.css";

const Card = () => {
  const [inputData, setInputData] = useContext(InputContext);

  let dateFieldClass = "";
  if (inputData.expirationMonth.focus || inputData.expirationYear.focus) {
    dateFieldClass = "field-active";
  }
  const nameFieldClass = inputData.cardName.focus ? "field-active" : "";
  const numberFieldClass = inputData.cardNumber.focus ? "field-active" : "";
  const cleanNumberValue = DOMPurify.sanitize(inputData.cardNumber.value);
  const cleanNameValue = DOMPurify.sanitize(inputData.cardName.value);
  const cleanMonthValue = DOMPurify.sanitize(inputData.expirationMonth.value);
  const cleanYearValue = DOMPurify.sanitize(inputData.expirationYear.value);
  const cleanCVVData = DOMPurify.sanitize(inputData.cardCVV.value);
  const showBackFace = inputData.cardCVV.focus;

  return (
    <div className={`card ${showBackFace ? "is-flipped" : ""}`}>
      <CardFront
        dateFieldClass={dateFieldClass}
        nameFieldClass={nameFieldClass}
        numberFieldClass={numberFieldClass}
        cleanNumberValue={cleanNumberValue}
        cleanNameValue={cleanNameValue}
        cleanMonthValue={cleanMonthValue}
        cleanYearValue={cleanYearValue}
      />
      <CardBack cleanCVVData={cleanCVVData} />
    </div>
  );
};

export default Card;
