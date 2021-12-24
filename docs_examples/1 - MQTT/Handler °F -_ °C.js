//@ts-check : enable more type checks for editor
//@handler  : Handler °F -> °C
//@author   : Kristina Goldinova

/**
 * @param {number} tempF °F
 */
function process(tempF) {
  const tempC = (tempF - 32)*5/9; // °C
  return { tempC };
}

/* ↑ here ends original handler code  */
/* ↓ here goes generated debug  code  */

/* 01. define test values for model "Kettle model" */
const config = {};
const packet = {
  "tempF": 67
};

/* 02. run handler code */
const result = process(
  packet["tempF"]
);

/* 03. log handler results converted back to "Kettle model" */
console.log({
  "temperatureC": result["tempC"]
});

