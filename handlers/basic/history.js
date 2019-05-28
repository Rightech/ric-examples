const history = require('@ric/handler/history');

/**
 * Makes the sum of last 10 x'es
 * @param {number} x first
 */
function process(x) {
  const sum = history.get(['x'], 10)
    .map(({ x }) => Number(x))
    .reduce((acc, val) => acc + val, 0);

  return { sum };
}
