
This device has not sent any data yet. &nbsp;  

Check our repo with [MQTT examples](https://github.com/Rightech/ric-examples/tree/master/mqtt#examples) for various IoT platforms:

* [Arduino | NodeMCU](https://github.com/Rightech/ric-examples/tree/master/mqtt/arduino)
* [Node.js | Raspberry Pi](https://github.com/Rightech/ric-examples/blob/master/mqtt/nodejs)
* [FreeRTOS | ESP32](https://github.com/Rightech/ric-examples/blob/master/mqtt/freertos)

You can also publish some test payloads with any MQTT client.

For example with `mosquitto_pub` client from [Eclipse Mosquitto](https://mosquitto.org/download/) project:

```console
$ mosquitto_pub -d \
    -h {{env}} \
    -i {{object.id}} \
    -t base/state/temperature \
    -m 36.6
```

Or any other MQTT client tool like:
* [MQTT.fx](https://mqttfx.jensd.de/)
* [MQTT Explorer](https://mqtt-explorer.com/)

If you have any further questions contact our [tech guys](mailto:development@rightech.io?subject=Telematic%20protocols&body=Im%20interested%20in%20mqtt%20devices)  
or contact us at [Telegram](https://t.me/rightech_iot).