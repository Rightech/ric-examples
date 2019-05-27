

const sensor = require('node-dht-sensor').promises;
const mqtt = require('mqtt').connect('mqtt://sandbox.rightech.io', {
  clientId: process.env.MQTT_CLIENTID || '<ric-mqtt-client-id>'
});

const DHT11 = 11;
const GPIO_PIN = 4;

async function publishTemperature() {
  const { temperature, humidity } = await sensor.read(DHT11, GPIO_PIN);

  mqtt.publish('base/state/temperature', temperature.toFixed(2));
  mqtt.publish('base/state/humidity', humidity.toFixed(2));

  setTimeout(publishTemperature, 5000);
}

publishTemperature();
