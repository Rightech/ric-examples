
#include "EspMQTTClient.h" /* https://github.com/plapointe6/EspMQTTClient */
#include "DHT.h" /* 1. https://github.com/adafruit/Adafruit_Sensor
                    2. https://github.com/adafruit/DHT-sensor-library  */

EspMQTTClient client(
  "<wifi-ssid>",
  "<wifi-password>",

  "sandbox.rightech.io",
  "<ric-mqtt-client-id>"
);

#define DHTPIN 2
DHT dht(DHTPIN, DHT11);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void onConnectionEstablished() {
  Serial.println("connected");
}

long last = 0;
void publishTemperature() {
  long now = millis();
  if (client.isConnected() && (now - last > 5000)) {
    last = now;
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    client.publish("base/state/temperature", String(t));
    client.publish("base/state/humidity", String(h));
  }
}

void loop() {
  client.loop();
  publishTemperature();
}