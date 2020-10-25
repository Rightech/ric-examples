
Данное устройство ещё не присылало каких-либо данных.

Посмотрите наш репозиторий с [примерами](https://github.com/Rightech/ric-examples/tree/master/mqtt#examples) для некоторых IoT платформ:

* [Arduino | NodeMCU](https://github.com/Rightech/ric-examples/tree/master/mqtt/arduino)
* [Node.js | Raspberry Pi](https://github.com/Rightech/ric-examples/blob/master/mqtt/nodejs)
* [FreeRTOS | ESP32](https://github.com/Rightech/ric-examples/blob/master/mqtt/freertos)


Вы также можете протестировать отправку данных с помощью любого MQTT клиента.

Например `mosquitto_pub` из проекта [Eclipse Mosquitto](https://mosquitto.org/download/):

```console
$ mosquitto_pub -d \
    -h {{env}} \
    -i {{object.id}} \
    -t base/state/temperature \
    -m 36.6
```

Или какого-нибудь другого:
* [MQTT.fx](https://mqttfx.jensd.de/)
* [MQTT Explorer](https://mqtt-explorer.com/)


В случае возникновения вопросов свяжитесь с нашим [техническим специалистом](mailto:development@rightech.io?subject=Telematic%20protocols&body=Im%20interested%20in%20mqtt%20devices)  
или напишите в наш [Telegram-чат](https://t.me/rightech_iot).