#include "Arduino.h"
#include "EspMQTTClient.h" /* https://github.com/plapointe6/EspMQTTClient */
// Servo library
#include <Servo.h>

// Object Servo with name myservo
Servo myservo;
int pos;

EspMQTTClient client(
  "<wifi-ssid>",
  "<wifi-password>",

  "sandbox.rightech.io",
  "<ric-mqtt-client-id>"
  );


void setup() {
  Serial.begin(9600);
  move(0);
}

void onConnectionEstablished() {
  Serial.println("connected");
  client.subscribe("move", [] (const String& payload)  {
    int angle = payload.toInt();
    if (angle != pos) {
      move(angle);
    }
    client.publish("position", payload);
  });
}

void loop() {
  client.loop();
}

void move(const int angle)
{
    myservo.attach(5);
    myservo.write(angle);
    delay(800);
    myservo.detach();
    pos = angle;
}
