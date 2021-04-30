## Download compose file

```sh
> curl https://raw.githubusercontent.com/edgexfoundry/developer-scripts/master/releases/geneva/compose-files/docker-compose-geneva-redis-no-secty.yml -o docker-compose.yml
```

## Add MQTT exporter service

```yaml

  app-service-mqtt:
    image: edgexfoundry/docker-app-service-configurable:1.1.0
    ports:
      - "127.0.0.1:48101:48101"
    container_name: edgex-app-service-configurable-mqtt
    hostname: edgex-app-service-configurable-mqtt
    networks:
      - edgex-network
    environment:
      <<: *common-variables
      edgex_profile: mqtt-export
      Service_Host: edgex-app-service-configurable-mqtt
      Service_Port: 48101
      MessageBus_SubscribeHost_Host: edgex-core-data
      Binding_PublishTopic: events
      Writable_Pipeline_Functions_MQTTSend_Addressable_Publisher: <client-id>
      Writable_Pipeline_Functions_MQTTSend_Addressable_Address: dev.rightech.io
      Writable_Pipeline_Functions_MQTTSend_Addressable_Port: 1883
      Writable_Pipeline_Functions_MQTTSend_Addressable_Protocol: tcp
      Writable_Pipeline_Functions_MQTTSend_Addressable_Topic: EdgeXEvents
    depends_on:
      - consul
      - data

```

## Run EdgeX

```sh
> docker-compose up
```
