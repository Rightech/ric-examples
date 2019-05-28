const { Buffer } = require('buffer');

function bit(value, bit) {
  return ((value) & (1 << bit)) !== 0;
}

/**
 * Parse Vega TD-11 Payload
 *   http://iotvega.com/product/td11
 * 
 * @param {string} payload raw
 */
function process(payload) {
  const bytes = [...Buffer.from(payload, 'base64')];
  const [, b1, , b3, b4, b5, b6] = bytes;

  const temp = ((b4 << 8) | b3) / 10;
  const protection = bit(b6, 0);
  const tamper = bit(b6, 1);
  const hall1 = bit(b6, 2);
  const hall2 = bit(b6, 3);

  return { battery: b1, temp, protection, tamper, hall1, hall2 };
}


/** 
 @test payload 'AWIIIQEADw=='
*/
