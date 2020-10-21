import React from "react";
import { Dropdown, Inputbox } from "../exports";
import { InputProvider } from "../../context/InputContext";
import { getYearRange, getMonthRange } from "../../utils/functions";
import "./App.css";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <main className="app">
      <InputProvider>
        <form className="app__form" onSubmit={handleSubmit}>
          <Inputbox
            label="Card Number"
            id="card-number"
            match="^[\d\s]+$"
            help="Card Number can only consist of numbers and spaces"
          />
          <Inputbox
            label="Card Name"
            id="card-name"
            match="^[a-zA-Z\s]+$"
            help="Name of person that owns this card Allowed: a-z/A-Z/spaces"
          />
          <div className="app__inputrow">
            <div>
              <label>Expiration Date</label>
              <Dropdown
                options={getMonthRange()}
                label="Expiration Month"
                id="expiration-month"
                boxfor="Month"
              />
              <Dropdown
                options={getYearRange()}
                label="Expiration Year"
                id="expiration-year"
                boxfor="Year"
              />
            </div>
            <div>
              <Inputbox
                label="CVV"
                id="card-cvv"
                match="[0-9]{3,4}"
                help="CVV code must be 3-4 digits long"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </InputProvider>
    </main>
  );
};

export default App;
