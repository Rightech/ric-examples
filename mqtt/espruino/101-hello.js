console.log("init");

const WIFI_SSID = "...";
const WIFI_PASS = "...";

const MQTT_CLIENT_ID = "...";
const MQTT_HOST = "dev.rightech.io";

let mqtt;

function connectMqtt() {
  mqtt = require("MQTT").connect({
    client_id: MQTT_CLIENT_ID,
    host: MQTT_HOST,
  });

  mqtt.on("connected", () => {
    console.log("mqtt connected");

    mqtt.publish("hello", JSON.stringify({ n: Date.now(), r: Math.random() }));
  });

  mqtt.on("disconnected", () => {
    console.log("mqtt disconnected");
  });

  mqtt.on("publish", (pub) => {
    console.log(`publish received: ${pub.topic}: ${pub.message}`);
  });

  mqtt.on("error", (message) => {
    console.log(`mqtt error: ${message}`);
  });
}

require("Wifi").connect(WIFI_SSID, { password: WIFI_PASS }, (err) => {
  if (err) {
    console.log(`wifi error: ${err}`);
    return;
  }
  console.log("wifi connected");
  connectMqtt();
});
