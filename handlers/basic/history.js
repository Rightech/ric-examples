const history = require('@ric/handler/history');

/**
 * Makes the sum of last 10 aa's
 * @param {number} a first
 */
function process(a) {
  const sum = history.get(['a'], 10)
    .map(x => Number(x.a))
    .reduce((acc, val) => acc + val, 0);

  return { sum };
}
