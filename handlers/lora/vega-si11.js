const { Buffer } = require('buffer');

/**
 * Parse Vega SI-11 (Вега СИ-11) Payload
 *   https://en.iotvega.com/product/si11
 * From LoRa Server project
 *   https://www.loraserver.io/
 * 
 * @param {string} loraData raw
 */
function process(loraData) {
  const buffer = Buffer.from(loraData, 'base64');
  const bytes = [...buffer];

  let offset = 0;
  const event = bytes[offset++];
  const battery = bytes[offset++];
  offset++; // skip config byte

  let eventin = -1;
  if (event === 2) {
    eventin = bytes[offset++];
  }
  let devtime = buffer.readInt32LE(offset); offset += 4;
  devtime = devtime * 1000;
  let temp;
  if (event === 1) {
    temp = bytes[offset++];
  }

  const in1 = buffer.readInt32LE(offset);  offset += 4;
  const in2 = buffer.readInt32LE(offset);  offset += 4;
  const in3 = buffer.readInt32LE(offset);  offset += 4;
  const in4 = buffer.readInt32LE(offset);  offset += 4;

  return { event, battery, temp, eventin, devtime, in1, in2, in3, in4};
}


/** 
 @test loraData 'AWMMgHV1WJwAAAAAAAAAAAAAAAAAAAAA'
*/
