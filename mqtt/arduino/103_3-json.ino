
#include "Arduino.h"
#include "EspMQTTClient.h"  /* https://github.com/plapointe6/EspMQTTClient */

#define PUB_DELAY (5 * 1000) /* 5 seconds */
#define PINS 3               /* 3 RGB pins */

EspMQTTClient client(
  "<wifi-ssid>",
  "<wifi-password>",

  "dev.rightech.io",
  "<ric-mqtt-client-id>"
);

#define LDR_PIN 17
#define REDPIN 15
#define GREENPIN 13
#define BLUEPIN 12

const byte rgbPins[PINS] = {REDPIN, GREENPIN, BLUEPIN};

void setup() {
  Serial.begin(9600);
  for(byte i=0; i<PINS; i++){
    pinMode( rgbPins[i], OUTPUT );
  }
}

void onConnectionEstablished() {
  Serial.println("connected");
  client.publish("base/state/light", "0");
  client.subscribe("led_on", [] (const String & payload)  {
    ledOn(payload);
  });
}

void ledOn(const String & isLedOn)
{
  if (isLedOn == "0")
  {
    // Turn-off
    analogWrite(rgbPins[0], 0);
    analogWrite(rgbPins[1], 0);
    analogWrite(rgbPins[2], 0);
    
    client.publish("base/state/light", "0");
  }
  else
  {
    // Turn-on amber color
    analogWrite(rgbPins[0], 255);
    analogWrite(rgbPins[1], 191);
    analogWrite(rgbPins[2], 0);

    client.publish("base/state/light", "1");
  }
}

long last = 0;
void publishData() {
  long now = millis();
  if (client.isConnected() && (now - last > PUB_DELAY)) {
    // Empirical calculation
    int luminosity = -8 * analogRead(LDR_PIN) + 8200;
    client.publish("base/state/lum", String(luminosity));
    last = now;
  }
}

void loop() {
  client.loop();
  publishData();
}
