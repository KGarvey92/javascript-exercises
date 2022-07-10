const ftoc = function(temperature) { 
  let celcius = (temperature - 32) * (5 / 9);
  return Number(celcius.toFixed(1))
};

const ctof = function(temperature) {
  let fahrenheit = temperature * (9 / 5) + 32;
  return Number(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
