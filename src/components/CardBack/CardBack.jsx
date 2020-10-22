import React from "react";
import "./CardBack.css";

const CardBack = (props) => {
  return (
    <div className="card__face card__face--back">
      <div className="magnet-strip" />
      <strong>CVV</strong>
      <form>
        <input
          type="password"
          disabled
          value={props.cleanCVVData}
          className="cvv-field-input"
          autoComplete="off"
        />
      </form>
      <span className="card-marker-back">Visa</span>
    </div>
  );
};

export default CardBack;
