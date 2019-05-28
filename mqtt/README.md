# Rightech IoT with MQTT

## Quick start

### 1. Create MQTT model

![Create MQTT Model](../.assets/mqtt-create-model.gif)


### 2. Create object

![Create MQTT Object](../.assets/mqtt-create-object.gif)


### 3. Send some payloads

![Publish MQTT data](../.assets/mqtt-send-data.gif)

For example with `mosquitto_pub` client from [Eclipse Mosquitto](https://mosquitto.org/download/) project.

```console
$ mosquitto_pub -d -h sandbox.rightech.io -i <ric-mqtt-client-id> -t base/state/temperature -m 23
$ mosquitto_pub -d -h sandbox.rightech.io -i <ric-mqtt-client-id> -t base/state/temperature -m 24
```

Or any other MQTT client tool like:
 - [MQTT.fx](https://mqttfx.jensd.de/)
 - [MQTT Explorer](https://mqtt-explorer.com/)

> **WARNING**: Using MQTT `ClientId` is very basic and examplish method of device identification/authentication.  
We recommend using X.509 client certificates, or at least TLS with username/password pair.


## Examples

### (:construction:) 101  Hello MQTT

| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| Raspberry Pi   | Node.js     | [101-hello.js](./nodejs/101-hello.js)
| NodeMCU        | Arduino     | [101-hello.ino](./esp8266/101-hello.ino)


### (:construction:) 102  Connect DHT11

### (:construction:) 103  Publish JSON

### (:construction:) 104  TLS


## Connect


| Project       | With example model     |  Config
| ------------- | ------------- | ----------
| [OpenMQTTGateway](https://github.com/1technophile/OpenMQTTGateway)   | (:construction:)  | -
| [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                 | [mqtt-zigbee2mqtt](../.ric-models/mqtt-zigbee2mqtt.ric-model.json)  | -
| [LoRa Server](https://github.com/brocaar/loraserver)                 | [mqtt-loraserver-td11](../.ric-models/mqtt-loraserver-td11.ric-model.json)  | -
