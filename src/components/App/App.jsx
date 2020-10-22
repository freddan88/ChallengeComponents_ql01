import React, { useContext, useEffect, useState } from "react";
import { Dropdown, Inputbox, Card } from "../exports";
import { InputContext } from "../../context/InputContext";
import { checkCreditCard } from "../../utils/functions";
import { getYearRange, getMonthRange } from "../../utils/functions";
import "./App.css";

const App = () => {
  const [cardBrand, setCardBrand] = useState("Card");
  const [maxCardNumber, setMaxCardNumber] = useState("19");
  const [minCardNumber, setMinCardNumber] = useState("13");
  const [inputData] = useContext(InputContext);

  useEffect(() => {
    const cardInfo = checkCreditCard(inputData.cardNumber.value);
    if (cardInfo) {
      setCardBrand(cardInfo.brand);
      setMaxCardNumber(cardInfo.maxCharacters);
      setMinCardNumber(cardInfo.minCharacters);
    }
    if (inputData.cardNumber.value.length === 0) {
      setCardBrand("Visa");
    }
  }, [inputData]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="app">
      <div className="app__card-container">
        <Card brand={cardBrand} />
      </div>
      <form className="app__form" onSubmit={handleSubmit}>
        <Inputbox
          label="Card Number"
          id="cardNumber"
          match="^[\d\s]+$"
          help="Card Number can only consist of numbers and spaces"
          maxCharactersLength={maxCardNumber}
          minCharactersLength={minCardNumber}
        />
        <Inputbox
          label="Card Name"
          id="cardName"
          match="^[a-zA-Z\s]+$"
          help="Name of person that owns this card Allowed: a-z/A-Z/spaces"
          maxCharactersLength="25"
          minCharactersLength="1"
        />
        <div className="app__inputrow">
          <div>
            <label>Expiration Date</label>
            <Dropdown
              options={getMonthRange()}
              label="Expiration Month"
              id="expirationMonth"
              boxfor="Month"
            />
            <Dropdown
              options={getYearRange()}
              label="Expiration Year"
              id="expirationYear"
              boxfor="Year"
            />
          </div>
          <div>
            <Inputbox
              label="CVV"
              id="cardCVV"
              match="[0-9]{3,4}"
              help="CVV code must be 3-4 digits long"
              maxCharactersLength="4"
              minCharactersLength="3"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default App;
