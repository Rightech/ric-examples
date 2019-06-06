
Apparently, this device never sent any data at this time. &nbsp;  
You can publish some test payloads with any MQTT client.

For example with `mosquitto_pub` client from [Eclipse Mosquitto](https://mosquitto.org/download/) project.

```console
$ mosquitto_pub -d -h {{env}} \
    -i {{object.id}} \
    -t base/state/temperature \
    -m 36.6
```

Or any other MQTT client tool like:
 - [MQTT.fx](https://mqttfx.jensd.de/)
 - [MQTT Explorer](https://mqtt-explorer.com/)


Also checkout our repo with MQTT [examples](https://github.com/Rightech/ric-examples/tree/master/mqtt#examples)
