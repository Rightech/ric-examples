# Rightech IoT with MQTT

## 1. Create MQTT model

![Create MQTT Model](../.assets/mqtt-create-model.gif)


## 2. Create object

![Create MQTT Object](../.assets/mqtt-create-object.gif)


## 3. Send some payloads

![Publish MQTT data](../.assets/mqtt-send-data.gif)

For example with `mosquitto_pub` client from [Eclipse Mosquitto](https://mosquitto.org/download/) project.

```console
$ mosquitto_pub -d -h sandbox.rightech.io -i <ric-mqtt-client-id> -t base/state/temperature -m 23
$ mosquitto_pub -d -h sandbox.rightech.io -i <ric-mqtt-client-id> -t base/state/temperature -m 24
```



### Connect


| Project       | With example model     |  Config
| ------------- | ------------- | ----------
| [OpenMQTTGateway](https://github.com/1technophile/OpenMQTTGateway)   | -  | -
| [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                 | [mqtt-zigbee2mqtt](../.ric-models/mqtt-zigbee2mqtt.ric-model.json)  | -
| [LoRa Server](https://github.com/brocaar/loraserver)                 | [mqtt-loraserver-td11](../.ric-models/mqtt-loraserver-td11.ric-model.json)  | -
