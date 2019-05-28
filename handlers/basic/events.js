const events = require('@ric/handler/events');

/**
 * Generate event if value more than 20
 * @param {number} value some
 */
function process(value) {
  if (value > 20) {
    events.gen('something-happened', { message: 'Do somethig!', value });
  }
}
