/**
 * Calculates the effective temperature
 * @param {number} temperature first
 * @param {number} humidity second
 */
function process(temperature, humidity) {
  const eff_temp = temperature - 0.4*(temperature-10)*(1-humidity/100);
  return { eff_temp };
}

/**
 * @author `user_name`
 */
module.exports = process;
