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


## Examples

### 101  Hello MQTT

Connect to Rightech IoT and publish to some topics.  
  (Also listen to some commands)

> **WARNING**: Using MQTT `clientId` is very basic and examplish method of device identification/authentication.  
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


### 103_1  Publish JSON

| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| Raspberry Pi   | Node.js     | [103_1-json.js](./nodejs/103-json.js)
| NodeMCU        | Arduino     | [103_1-json.ino](./arduino/103-json.ino)

### 103_2  Subscribe JSON

| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| NodeMCU        | Arduino     | [103_2-json.ino](./arduino/103_2-json.ino)


### 104  TLS

| Board          | Framework   |  Example
| -------------- | ----------- | ----------
| Raspberry Pi   | Node.js     | [104-tls.js](./nodejs/104-tls.js)
| NodeMCU        | Arduino     | (:construction:)


## Connect

| Project       | With example model     |  Config
| ------------- | ------------- | ----------
| [OpenMQTTGateway](https://github.com/1technophile/OpenMQTTGateway)   | [mqtt-omg](../.ric-models/mqtt-omg.ric-model.json)  | -
| [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                 | [mqtt-zigbee2mqtt](../.ric-models/mqtt-zigbee2mqtt.ric-model.json)  | -
| [LoRa Server](https://github.com/brocaar/loraserver)                 | [mqtt-loraserver-td11](../.ric-models/mqtt-loraserver-td11.ric-model.json)  | -
