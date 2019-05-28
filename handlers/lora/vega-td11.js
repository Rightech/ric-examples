const { Buffer } = require('buffer');

function bit(value, bit) {
  return ((value) & (1 << bit)) !== 0;
}

/**
 * Parse Vega TD-11 (Вега ТД-11) Payload
 *   https://en.iotvega.com/product/td11
 * From LoRa Server project
 *   https://www.loraserver.io/
 * 
 * Sample model for this example:
 *   https://github.com/Rightech/ric-examples/blob/master/.ric-models/mqtt-loraserver-td11.ric-model.json
 * 
 * @param {string} loraData raw
 */
function process(loraData) {
  const bytes = [...Buffer.from(loraData, 'base64')];
  const [, b1, , b3, b4, b5, b6] = bytes;

  const temp = ((b4 << 8) | b3) / 10;
  const security = bit(b6, 0);
  const tamper = bit(b6, 1);
  const hall1 = bit(b6, 2);
  const hall2 = bit(b6, 3);

  return { battery: b1, temp, security, tamper, hall1, hall2 };
}


/** 
 @test loraData 'AWIIIQEADw=='
*/
