//@ts-check : enable more type checks for editor
//@handler  : Parse payload
//@author   : Kristina Goldinova

const EVENT_PACKET = 1;
const EVENT_ALARM = 2;

/**
 * Check if n-th bit set for number
 * @param value {number} number value
 * @param bit   {number} bit position
 */
function bit(value, bit) {
  return (value & (1 << bit)) !== 0;
}

/**
 * Parse Vega SI-11 Payload
 * https://en.iotvega.com/product/si11
 *
 * ```
 *                   | 0    | 1   | 2   | 3 | 4 | 5 | 6 | 7 | 8-11  | 12-15 | 16-19 | 20-23
 *  1 - EVENT_PACKET | type | bat | cfg |  timestamp    | t | in[0] | in[1] | in[2] | in[3]
 *  2 - EVENT_ALARM  | type | bat | cfg | i |   timestamp   | in[0] | in[1] | in[2] | in[3]
 *
 * ```
 * @param payload {string} base64 encoded payload
 */
function process(payload) {
  const data = ric.base64.decode(payload);
  let offset = 0;

  /* - option 1 - parse binary payload from raw byte array */
  const bytes = new Uint8Array(data.buffer);

  const evtype = bytes[offset++];
  const battery = bytes[offset++];
  const configByte = bytes[offset++];
  const config = {
    activation: bit(configByte, 0) ? "abp": "otaa",
    inputs: [
      +bit(configByte, 4),
      +bit(configByte, 5),
      +bit(configByte, 6),
      +bit(configByte, 7)
    ],
  };
  const evin = evtype === EVENT_ALARM
      ? bytes[offset++]
      : undefined;

  /* - option 2 - use JS `DataView` interface (like Node's `Buffer`) */
  const evtime = data.getUint32(offset, true) * 1000;
  offset += 4;

  const temperature = evtype === EVENT_PACKET
      ? data.getInt8(offset++)
      : undefined;

  const inputs = [];
  for (let i = 0; i < 4; i++) {
    inputs[i] = data.getUint32(offset, true);
    offset += 4;
  }

  return { evtype, battery, config, evin, evtime, temperature, inputs };
}

/* ↑ here ends original handler code  */
/* ↓ here goes generated debug  code  */

/* 01. define test values */
const config = {};
const packet = {
  "payload": "string"
};

/* 02. run handler code */
const result = process(
    packet["payload"]
);

/* 03. log handler results */
console.log({
  "evtype": result["evtype"],
  "battery": result["battery"],
  "config": result["config"],
  "evin": result["evin"],
  "evtime": result["evtime"],
  "temperature": result["temperature"],
  "inputs": result["inputs"]
});

