
- [Original example](https://github.com/platformio/platform-espressif32/tree/v3.1.1/examples/espidf-aws-iot) from [platformio/platform-espressif32](https://github.com/platformio/platform-espressif32) repo.  
- [Original README.rst](README.rst)

#### modifications applied to original example:
 - [src/certs/aws-root-ca.pem](./src/certs/aws-root-ca.pem) replaced Amazon CA cert with Let's Encrypt ISRG Root X1
 - [src/subscribe_publish_sample.c](./src/subscribe_publish_sample.c) defined `MQTT_SERVER_HOST` and used it as MQTT host address
```cpp
#define MQTT_SERVER_HOST  "dev.rightech.io"

char HostAddress[255] = MQTT_SERVER_HOST;
```

### 1. Generate X.509 client certificate in Righech IoT:

![Generate X.509 client certificate](../../.assets/mqtt-issue-cert.gif)

- Copy certificate to [src/certs/certificate.pem.crt](./src/certs/certificate.pem.crt) file
- Copy key to [src/certs/private.pem.key](./src/certs/private.pem.key) file

### 2. Define your network credentials 

In file [src/subscribe_publish_sample.c](./src/subscribe_publish_sample.c#L55-L62)
```cpp
#define EXAMPLE_WIFI_SSID "..."
#define EXAMPLE_WIFI_PASS "..."
```

or use menuconfig `> pio run -t menuconfig`

### 3. Build and flash

Install [PlatformIO Core](https://docs.platformio.org/en/latest/core/installation.html), connect your ESP32 and simply run

```
> pio run -t upload && pio device monitor
```
