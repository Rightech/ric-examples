
#include "Arduino.h"
#include "EspMQTTClient.h"  /* https://github.com/plapointe6/EspMQTTClient */
                            /* https://github.com/knolleary/pubsubclient */
#include "DHT.h"            /* 1. https://github.com/adafruit/Adafruit_Sensor
                              2. https://github.com/adafruit/DHT-sensor-library  */
#include "ArduinoJson.h"    /* https://github.com/bblanchon/ArduinoJson */

#define PUB_DELAY (5 * 1000) /* 5 seconds */
#define PINS 3               /* 3 RGB pins */

EspMQTTClient client(
  "<wifi-ssid>",
  "<wifi-password>",

  "dev.rightech.io",
  "<ric-mqtt-client-id>"
);

#define DHTPIN 2
#define REDPIN 15
#define GREENPIN 13
#define BLUEPIN 12

DHT dht(DHTPIN, DHT11);
const byte rgbPins[PINS] = {REDPIN,GREENPIN,BLUEPIN};

void setup() {
  Serial.begin(9600);
  dht.begin();
  for(byte i=0; i<PINS; i++){
    pinMode( rgbPins[i], OUTPUT );
  }
}

void onConnectionEstablished() {
  Serial.println("connected");
  client.subscribe("led_on", [] (const String & payload)  {
    ledOn(payload);
  });
}

void ledOn(const String & payload)
{
  DynamicJsonDocument led(1024);
  deserializeJson(led, payload);
  
  analogWrite(rgbPins[0], led["red"]);
  analogWrite(rgbPins[1], led["green"]);
  analogWrite(rgbPins[2], led["blue"]);
}

long last = 0;
void publishData() {
  long now = millis();
  if (client.isConnected() && (now - last > PUB_DELAY)) {
    float t = dht.readTemperature();
    client.publish("base/state/temperature", String(t));
    float h = dht.readHumidity();
    client.publish("base/state/humidity", String(h));
    last = now;
  }
}

void loop() {
  client.loop();
  publishData();
}
