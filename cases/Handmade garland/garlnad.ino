#include "Arduino.h"
#include "Scheduler.h"      /* https://github.com/nrwiersma/ESP8266Scheduler */
#include "EspMQTTClient.h"  /* https://github.com/plapointe6/EspMQTTClient */
                            /* https://github.com/knolleary/pubsubclient */

// Даем разумные имена для пинов, управляемых светодиодами
#define BLUE_LED_PIN 12
#define WHITE_LED_PIN 13

EspMQTTClient client(
  "<wifi-ssid>",
  "<wifi-password>"

  "dev.rightech.io",

  "<ric-mqtt-client-id>"
);

// Задача для обработки поступающих команд
class ClientTask : public Task {
  public:
    void loop() {
      client.loop();
    }
} client_task;

// Задача для включения светодиодов
class LedOnTask : public Task {
  protected:
    void loop()
    {
      digitalWrite(WHITE_LED_PIN, HIGH);
      digitalWrite(BLUE_LED_PIN, HIGH);
      shouldRunValue = false; // останавливаем этот цикл сразу после включения
    }

    bool shouldRun()
    {
      return shouldRunValue;
    }

  public:
    bool shouldRunValue = false;
} led_on_task;

// Задача для выключения светодиодов
class LedOffTask : public Task {
  protected:
    void loop()
    {
      digitalWrite(WHITE_LED_PIN, LOW);
      digitalWrite(BLUE_LED_PIN, LOW);
      shouldRunValue = false; // останавливаем этот цикл сразу после выключения
    }

    bool shouldRun()
    {
      return shouldRunValue;
    }

  public:
    bool shouldRunValue = false;
} led_off_task;

// Задача для плавного горения светодиодов в противофазе
class LedAttenuationTask : public Task {
  protected:
    void loop()
    {
      // Вычисляем задержку на один проход цикла в зависимости от полученного в payload значения
      float delayValue = period.toInt() * 1000 /*в миллисекунды*/ / 2 /*на два цикла*/ / 1024 /*на каждую итерацию в цикле*/;
      for (int i = 0; i <= 1023; i++) {
        analogWrite(WHITE_LED_PIN, i); // горит ярче
        analogWrite(BLUE_LED_PIN, 1023 - i); // тускнеет
        delay(delayValue);
      }
      for (int i = 1023; i >= 0; i--) {
        analogWrite(WHITE_LED_PIN, i); // тускнеет
        analogWrite(BLUE_LED_PIN, 1023 - i); // горит ярче
        delay(delayValue);
      }
    }

    bool shouldRun()
    {
      updateDelayTimer();
      if (isDelayed()) return false;
      if (!run_group_active) return false;
      return shouldRunValue;
    }

  public:
    bool shouldRunValue = false;
    String period;
} led_attenuation_task;

// Задача для быстрого мигания светодиодов в противофазе
class LedFlashingTask : public Task {
  protected:
    void loop()
    {
      float delayValue = period.toInt() * 1000 /*в миллисекунды*/;
      digitalWrite(WHITE_LED_PIN, HIGH);
      digitalWrite(BLUE_LED_PIN, LOW);
      delay(delayValue);
      digitalWrite(WHITE_LED_PIN, LOW);
      digitalWrite(BLUE_LED_PIN, HIGH);
      delay(delayValue);
    }

    bool shouldRun()
    {
      updateDelayTimer();
      if (isDelayed()) return false;
      if (!run_group_active) return false;
      return shouldRunValue;
    }

  public:
    bool shouldRunValue = false;
    String period;
} led_flashing_task;

void setup() {
  // Настраиваем пины в режим выхода, т.е. в режим источника напряжения
  pinMode(WHITE_LED_PIN, OUTPUT);
  pinMode(BLUE_LED_PIN, OUTPUT);
  // Библиотека «Scheduler» позволяет при необходимости запустить несколько потоков
  Scheduler.start(&led_on_task);
  Scheduler.start(&led_off_task);
  Scheduler.start(&led_attenuation_task);
  Scheduler.start(&led_flashing_task);
  Scheduler.start(&client_task);
  Scheduler.begin();
}

void onConnectionEstablished() {
  // Подписываемся на команды и запускаем нужный поток путем изменения переменной shouldRunValue
  client.subscribe("led_on", [] (const String & payload)  {
    client.publish("base/state/light", "on");
    led_off_task.shouldRunValue = false;
    led_attenuation_task.shouldRunValue = false;
    led_flashing_task.shouldRunValue = false;
    led_on_task.shouldRunValue = true;
  });
  client.subscribe("led_off", [] (const String & payload)  {
    client.publish("base/state/light", "off");
    led_on_task.shouldRunValue = false;
    led_attenuation_task.shouldRunValue = false;
    led_flashing_task.shouldRunValue = false;
    led_off_task.shouldRunValue = true;
  });
  client.subscribe("led_attenuation", [] (const String & payload)  {
    client.publish("base/state/light", "attenuation " + payload + " sec");
    led_on_task.shouldRunValue = false;
    led_off_task.shouldRunValue = false;
    led_flashing_task.shouldRunValue = false;
    led_attenuation_task.period = payload;
    led_attenuation_task.shouldRunValue = true;
  });
  client.subscribe("led_flashing", [] (const String & payload)  {
    client.publish("base/state/light", "flashing " + payload + " sec");
    led_on_task.shouldRunValue = false;
    led_off_task.shouldRunValue = false;
    led_attenuation_task.shouldRunValue = false;
    led_flashing_task.period = payload;
    led_flashing_task.shouldRunValue = true;
  });
}

void loop() {
}
