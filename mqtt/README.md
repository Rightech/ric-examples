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
$ mosquitto_pub -d -h dev.rightech.io -i <ric-mqtt-client-id> -t base/state/temperature -m 23
$ mosquitto_pub -d -h dev.rightech.io -i <ric-mqtt-client-id> -t base/state/temperature -m 24
```

Or any other MQTT client tool like:
 - [MQTT.fx](https://mqttfx.jensd.de/)
 - [MQTT Explorer](https://mqtt-explorer.com/)


## Examples

### 101  Hello MQTT

Connect to Rightech IoT and publish to some topics.  
  (Also listen to some commands)

> **WARNING**: Using only MQTT `clientId` is very basic and examplish method of device identification/authentication.  
We recommend using X.509 client certificates, or at least MQTT `username`/`password` pair.

| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| Raspberry Pi   | Node.js     | [101-hello.js](./nodejs/101-hello.js)
| NodeMCU        | Arduino     | [101-hello.ino](./arduino/101-hello.ino)


### 102  Connect DHT11

| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| Raspberry Pi   | Node.js     | [102-dht11.js](./nodejs/102-dht11.js)
| NodeMCU        | Arduino     | [102-dht11.ino](./arduino/102-dht11.ino)


### 103  Publish and subscribe JSON

| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| Raspberry Pi   | Node.js     | [103-json.js](./nodejs/103-json.js)
| NodeMCU        | Arduino     | [103-json.ino](./arduino/103-json.ino)

### 104  TLS

| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| Raspberry Pi   | Node.js     | [104-tls.js](./nodejs/104-tls.js)
| NodeMCU        | Arduino     | [104-tls.ino](./arduino/104-tls.ino)


### 201  RTOS
| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| ESP32          | ESP-IDF     | [esp-idf](./esp-idf#readme)

## Connect

| Project       | With example model     |  Config
| ------------- | ---------------------- | ----------
| [OpenMQTTGateway](https://github.com/1technophile/OpenMQTTGateway)   | [model.json](../.ric-models/mqtt-omg.ric-model.json)  | -
| [OctoPrint](https://octoprint.org/)                                  | [model.json](./octoprint/model.json)   | [config.yaml](./octoprint/config.yaml)
| [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                 | [model.json](./zigbee2mqtt/model.json) | [configuration.yaml](./zigbee2mqtt/configuration.yaml)
| [LoRa Server](https://github.com/brocaar/loraserver)                 | [model.json](../.ric-models/mqtt-loraserver-td11.ric-model.json)  | -
