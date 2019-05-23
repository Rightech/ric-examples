
#include "EspMQTTClient.h" /* https://github.com/plapointe6/EspMQTTClient */
#include "ArduinoJson.h" /* https://github.com/bblanchon/ArduinoJson */

#define PUB_DELAY (5 * 1000) /* 5 seconds */

EspMQTTClient client(
  "<wifi-ssid>",
  "<wifi-password>",

  "sandbox.rightech.io",
  "<ric-mqtt-client-id>"
);

void setup() {
  Serial.begin(9600);  
}

void onConnectionEstablished() {
  Serial.println("connected");
}

long last = 0;
void publishTemperature() {
  long now = millis();
  if (client.isConnected() && (now - last > PUB_DELAY)) {
    String payload;
    StaticJsonDocument<200> doc;
    doc["temperature"] = random(20, 30);
    doc["humidity"] = random(40, 90);
    serializeJson(doc, payload);

    client.publish("base/state", payload);
    last = now;
  }
}

void loop() {
  client.loop();
  publishTemperature();
}
