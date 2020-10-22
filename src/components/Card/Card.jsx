import React, { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import DOMPurify from "dompurify";
import { CardFront, CardBack } from "../exports";
import "./Card.css";

const Card = (props) => {
  const [inputData] = useContext(InputContext);

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
        brand={props.brand}
        dateFieldClass={dateFieldClass}
        nameFieldClass={nameFieldClass}
        numberFieldClass={numberFieldClass}
        cleanNumberValue={cleanNumberValue}
        cleanNameValue={cleanNameValue}
        cleanMonthValue={cleanMonthValue}
        cleanYearValue={cleanYearValue}
      />
      <CardBack cleanCVVData={cleanCVVData} brand={props.brand} />
    </div>
  );
};

export default Card;
