
#include "EspMQTTClient.h" /* https://github.com/plapointe6/EspMQTTClient */

EspMQTTClient client(
  "<wifi-ssid>",
  "<wifi-password>",
  "sandbox.rightech.io",
  "<ric-client-id>"
);

long last = 0;
void publishTemperature() {
  long now = millis();
  if (client.isConnected() && (now - last > 5000)) {
    auto payload = String(random(20, 30));
    client.publish("base/state/temperature", payload);

    last = now;
  }
}

void onConnectionEstablished() {
  client.subscribe("base/relay/led1", [] (const String &payload)  {
    Serial.println(payload);
  });
}

void setup() {
  Serial.begin(9600);  
}

void loop() {
  publishTemperature();
  client.loop();
}
