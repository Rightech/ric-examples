## Running Edgex services on Raspberry PI 3B+

Components
----------
 - Basic Edgex services
 
 - Modbus service for communication with modbus-tcp devices
 
 - MQTT-connector, which allows you to establish communication with [Rightech IoT cloud sandbox](https://sandbox.rightech.io/)
 
Useful information
------------------
 - Firstly, if you are not familliar with the Edgex services it's worth to learn about them.
 
 - Secondly, for the first steps in the Edgex services, it's recommended to use PC or laptop.
 
 - For better experience on Raspberry use 16 gb sd card. Create swap file because lack of RAM.
 
 ```shell
sudo touch /tmp/theswap
sudo chmod 600 /tmp/theswap
sudo dd if=/dev/zero of=/tmp/theswap bs=1M count=2048
sudo mkswap /tmp/theswap
sudo swapon /tmp/theswap
 ```
 
Prerequisites
-------------
  
 - Use Ubuntu 18.04 Server for arm64. Link: https://ubuntu.com/download/iot/raspberry-pi-2-3
 
 - Install docker, docker-compose.
 
 - You can use this modbus emulator. Link: http://modbuspal.sourceforge.net/.
 
 - The main instruction how to use these services is [there](https://github.com/kovorotniy/edgex-modbus-ric-tutorial). Don't forget to read through this instruction.
 
 - Execute `docker-compose up -d` for launching all services. 
 
 - UI will be available at `your-ip:4000`, there you can monitor all devices and services.
 
Customizing
-----------

- Modbus profile and configuration is hardcoded. After clonning repo, modify [modbus profile](./modbus.test.device.profile.yml) and [configuration](./configuration.toml) for own purposes. 

```yaml

  device-modbus:
    image: device-modbus
    ports:
      - "49999:49999"
    container_name: edgex-device-modbus
    hostname: edgex-device-modbus
    networks:
      edgex-network:
        aliases:
            - edgex-device-modbus
    volumes:
      - db-data:/data/db
      - log-data:/edgex/logs
      - consul-config:/consul/config
      - consul-data:/consul/data
      - ./configuration.toml:/res/docker/configuration.toml
      - ./modbus.test.device.profile.yml:/res/modbus.test.device.profile.yml
    depends_on:
      - data
      - command
```
 

 
 
