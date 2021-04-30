/**
 * Parse EdgeX MQTT exporter payloads
 *
 * @param {string} payload JSON EdgeX device readings
 */

function process(payload) {
  const result = {};

  if (!payload || typeof payload !== "string" || !payload.startsWith("{")) {
    return result;
  }

  const { readings } = JSON.parse(payload);

  for (const { name, value, valueType, floatEncoding } of readings || []) {
    let parsed = value;

    if (valueType.startsWith("Float")) {
      if (floatEncoding === "Base64") {
        if (valueType === "Float32") {
          parsed = ric.base64.decode(value).getFloat32(0);
        }
        if (valueType === "Float64") {
          parsed = ric.base64.decode(value).getFloat64(0);
        }
      } else {
        parsed = parseFloat(value);
      }
    }

    if (valueType.startsWith("Int") || valueType.startsWith("Uint")) {
      parsed = parseInt(value);
    }

    if (valueType === "Bool") {
      parsed = JSON.parse(value);
    }

    result[name] = parsed;
  }

  return result;
}
