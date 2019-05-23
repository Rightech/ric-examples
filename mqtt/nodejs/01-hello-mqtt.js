const mqtt = require('mqtt').connect('mqtt://sandbox.rightech.io', {
  clientId: 'mqtt-olegprohazko-8jqvz2'
})
 
mqtt.on('connect', ()=> {
  console.log(`${new Date}: connected`);
  mqtt.subscribe('base/relay/+');
});
 
mqtt.on('message', (topic, message) => {
  console.log(`${new Date}: [${topic}] ${message.toString()}`);
});

setInterval(()=> {
  const rand = (Math.random() * 30).toFixed(2);
  mqtt.publish('base/state/temperature', rand)
}, 5000);
