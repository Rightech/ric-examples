
const cert = `
-----BEGIN CERTIFICATE-----

    <ric-tls-certificate>

-----END CERTIFICATE-----
`;

const key = `
-----BEGIN RSA PRIVATE KEY-----

    <ric-tls-private-key>

-----END RSA PRIVATE KEY-----
`;


const mqtt = require('mqtt')
  .connect('mqtts://sandbox.rightech.io', { key, cert });

mqtt.on('connect', () => {
  console.log(`${new Date}: connected`);
  mqtt.subscribe('base/relay/+');
});

mqtt.on('message', (topic, message) => {
  console.log(`${new Date}: [${topic}] ${message.toString()}`);
});

setInterval(() => {
  const rand = (Math.random() * 30).toFixed(2);
  mqtt.publish('base/state/temperature', rand)
}, 5000);
