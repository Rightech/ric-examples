//@ts-check : enable more type checks for editor
//@handler  : Parse payload
//@author   : Kristina Goldinova

/**
 * @param {string} payload base64 sensors data
 */

// Types codes
var temp_and_humid_sensor = 0x01;
var light_sensor = 0x02;
var accelerometer = 0x03;
var switch_sensor = 0x04;
var leakage_sensor = 0x05;

function process(payload) {
  const buf = ric.base64.decode(payload); // decode
  let offset = 0;

  let sensor_type = buf.getUint8(offset++);
  switch (sensor_type) {
    case temp_and_humid_sensor:
      let temperature = buf.getUint16(offset, true) * 0.01; offset += 2;
      let humidity = buf.getUint16(offset, true) * 0.01;
      return { temperature, humidity };

    case light_sensor:
      let light = buf.getUint16(offset, true) * 0.01;
      return { light };

    case accelerometer:
      let hit_detected = buf.getUint16(offset, true) == 1; offset += 2;
      let axis1 = buf.getUint16(offset, true); offset += 2;
      let axis2 = buf.getUint16(offset, true); offset += 2;
      let axis3 = buf.getUint16(offset, true); offset += 2;
      let current_accel = buf.getUint16(offset, true); offset += 2;
      let max_accel = buf.getUint16(offset, true);
      return { hit_detected, axis1, axis2, axis3, current_accel, max_accel };

    case switch_sensor:
      let switch_detected = buf.getUint8(offset) == 1;
      return { switch_detected };

    case leakage_sensor:
      let leak_detected = buf.getUint8(offset) == 1;
      return { leak_detected };

    default:
      break;
  }
}

/* ↑ here ends original handler code  */
/* ↓ here goes generated debug  code  */

/* 01. define test values for model "Modem model" */
const config = {};
const packet = {
  "payload": "string"
};

/* 02. run handler code */
const result = process(
  packet["payload"]
);

/* 03. log handler results converted back to "Modem model" */
console.log({
  "temperature_value": result["temperature"],
  "humidity_value": result["humidity"],
  "light_value": result["light"],
  "hit_detected": result["hit_detected"],
  "axis_1": result["axis1"],
  "axis_2": result["axis2"],
  "axis_3": result["axis3"],
  "current_acceleration": result["current_accel"],
  "max_acceleration": result["max_accel"],
  "switch_detected": result["switch_detected"],
  "leak_detected": result["leak_detected"]
});

