export const getYearRange = () => {
  const startYear = new Date().getFullYear();
  const stopYear = startYear + 10;
  let i = startYear;
  const yearData = [];
  while (i <= stopYear) {
    yearData.push({
      value: i.toString().substr(-2),
      label: i.toString(),
    });
    i++;
  }
  return yearData;
};

export const getMonthRange = () => {
  const monthData = [];
  for (let index = 1; index <= 12; index++) {
    let num = index.toString();
    if (num.length === 1) {
      monthData.push({
        value: 0 + num,
        label: 0 + num,
      });
      continue;
    }
    monthData.push({
      value: num,
      label: num,
    });
  }
  return monthData;
};

export const setData = (key, data, state) => {
  let valueData = data;
  if (data.includes("Year")) valueData = "YY";
  if (data.includes("Month")) valueData = "MM";
  const obj = {
    ...state,
    [key]: {
      value: valueData,
      focus: state[key].focus,
    },
  };
  return obj;
};

export const setFocus = (key, state, val) => {
  const obj = {
    ...state,
    [key]: {
      value: state[key].value,
      focus: val,
    },
  };
  return obj;
};

export const checkCreditCard = (cardNumber) => {
  let cardInfo = {
    brand: "Card",
    maxCharacters: 19,
    minCharacters: 13,
  };

  const visaRegex = new RegExp("^(4)", "g");
  const americanExpressRegex = new RegExp("^(34)|^(37)", "g");
  const masterCardRegex = new RegExp(
    "^(5[1-5])|^(222[1-8][0-9]{2}|2229[0-8][0-9]|22299[0-9]|22[3-9][0-9]{3}|2[3-6][0-9]{4}|27[01][0-9]{3}|2720[0-8][0-9]|27209[0-9])",
    "g"
  );
  const discoverRegex = new RegExp(
    "^(6011)|^(62212[6-9]|6221[3-9][0-9]|622[2-8][0-9]{2}|6229[01][0-9]|62292[0-5])|^(64[4-9])|^(65)",
    "g"
  );

  if (visaRegex.test(cardNumber)) {
    cardInfo = setCardInfo("Visa", 19, 13);
  }
  if (americanExpressRegex.test(cardNumber)) {
    cardInfo = setCardInfo("American Express", 15, 15);
  }
  if (masterCardRegex.test(cardNumber)) {
    cardInfo = setCardInfo("Master Card", 16, 16);
  }
  if (discoverRegex.test(cardNumber)) {
    cardInfo = setCardInfo("Discover", 19, 16);
  }

  return cardInfo;
};

const setCardInfo = (brand, maxCharacters, minCharacters) => {
  const cardInfo = {
    brand,
    maxCharacters,
    minCharacters,
  };
  return cardInfo;
};
