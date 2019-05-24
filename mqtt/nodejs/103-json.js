/**
 For this particular example you could try this model with JSON params pre-configured: 
    https://github.com/rightech/ric-examples/blob/master/mqtt/.ric-models/03-json.json
 Note that: 
    @node `json`        - only "must have" for this example 
                        ( although you could rename all the nodes/fields as you like )
    @node `server-info` - for connectivity debug
    @node `mqtt-last`   - for mqtt publish debug
*/

const mqtt = require('mqtt').connect('mqtt://sandbox.rightech.io', {
  clientId: process.env.MQTT_CLIENTID || '<ric-mqtt-client-id>'
});

setInterval(() => {
  mqtt.publish('base/state', JSON.stringify({
    temperature: (Math.random() * 30).toFixed(2),
    humidity   : (Math.random() * 99).toFixed(2),
  }));
}, 5000);
