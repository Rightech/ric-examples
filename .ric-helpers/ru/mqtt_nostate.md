
Вероятно - данное устройство ещё не присылало своих данных. &nbsp;  
Вы можете отправить немного с помощью любого MQTT клиента.

Например `mosquitto_pub` из проекта [Eclipse Mosquitto](https://mosquitto.org/download/):

```console
$ mosquitto_pub -d 
    -h {{env}} \
    -i {{object.id}} \
    -t base/state/temperature \
    -m 36.6
```

Или какого-нибудь другого:
 - [MQTT.fx](https://mqttfx.jensd.de/)
 - [MQTT Explorer](https://mqtt-explorer.com/)


Посмотрите так же наш репозиторий с [примерами](https://github.com/Rightech/ric-examples/tree/master/mqtt#examples) для популярных IoT платформ.
