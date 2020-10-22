import React from "react";
import "./CardFront.css";

const CardFront = (props) => {
  const {
    dateFieldClass,
    nameFieldClass,
    numberFieldClass,
    cleanNumberValue,
    cleanNameValue,
    cleanMonthValue,
    cleanYearValue,
  } = props;
  return (
    <div className="card__face card__face--front">
      <div className="card-header">
        <div className="card-chip" />
        <span className="card-marker-front">Visa</span>
      </div>
      <div className={`card-number card-field ${numberFieldClass}`}>
        <span>{cleanNumberValue || "#### #### #### ####"}</span>
      </div>
      <div className="card-footer">
        <div className={`card-holder card-field ${nameFieldClass}`}>
          <small>Card Holder</small>
          <span>{cleanNameValue.toUpperCase() || "AD SOYAD"}</span>
        </div>
        <div className={`card-expires card-field ${dateFieldClass}`}>
          <small>Expires</small>
          <span>{`${cleanMonthValue}/${cleanYearValue}`}</span>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
