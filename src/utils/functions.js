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
  const obj = {
    ...state,
    [key]: {
      value: data.trim(),
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
