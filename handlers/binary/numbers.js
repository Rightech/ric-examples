const { Buffer } = require('buffer');

/**
 * Makes the sum of two numbers
 * @param {number} int8 signed 8-bit integer
 * @param {number} int16be signed 16-bit big-endian integer
 * @param {number} int16le signed 16-bit little-endian integer
 * @param {number} int32be signed 32-bit big-endian integer
 * @param {number} int32le signed 32-bit little-endian integer
 * 
 * @param {number} uint8 unsigned 8-bit integer
 * @param {number} uint16be unsigned 16-bit big-endian integer
 * @param {number} uint16le unsigned 16-bit little-endian integer
 * @param {number} uint32be unsigned 32-bit big-endian integer
 * @param {number} uint32le unsigned 32-bit little-endian integer
 * 
 * @param {number} float32be 32-bit big-endian float
 * @param {number} float32le 32-bit little-endian float
 * @param {number} double64be 64-bit big-endian double
 * @param {number} double64le 64-bit little-endian double
 */
function process(
  int8,
  int16be,
  int16le,
  int32be,
  int32le,

  uint8,
  uint16be,
  uint16le,
  uint32be,
  uint32le,

  float32be,
  float32le,
  double64be,
  double64le,
) {
  return {
    int8   : Buffer.from(int8).readInt8(),
    int16be: Buffer.from(int16be).readInt16BE(),
    int16le: Buffer.from(int16le).readInt16LE(),
    int32be: Buffer.from(int32be).readInt32BE(),
    int32le: Buffer.from(int32le).readInt32BE(),

    uint8   : Buffer.from(uint8).readUInt8(),
    uint16be: Buffer.from(uint16be).readUInt16BE(),
    uint16le: Buffer.from(uint16le).readUInt16LE(),
    uint32be: Buffer.from(uint32be).readUInt32BE(),
    uint32le: Buffer.from(uint32le).readUInt32BE(),

    float32be : Buffer.from(float32be).readFloatBE(),
    float32le : Buffer.from(float32le).readFloatLE(),
    double64be: Buffer.from(double64be).readDoubleBE(),
    double64le: Buffer.from(double64le).readDoubleLE(),
  };
}
