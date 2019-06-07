# ric-examples-mqtt-esp32-freertos


```console
$ git clone https://github.com/aws/amazon-freertos
$ cd amazon-freertos
```

In [demos/common/include/aws_clientcredential.h](https://github.com/aws/amazon-freertos/blob/master/demos/common/include/aws_clientcredential.h) define:

```C
#define clientcredentialMQTT_BROKER_ENDPOINT  "sandbox.rightech.io"

#define clientcredentialIOT_THING_NAME        "<ric-mqtt-client-id>"



#define clientcredentialWIFI_SSID             "<wifi-ssid>"

#define clientcredentialWIFI_PASSWORD         "<wifi-password>"
```

In [demos/common/include/aws_clientcredential_keys.h](https://github.com/aws/amazon-freertos/blob/master/demos/common/include/aws_clientcredential_keys.h) define:

```C
#define keyJITR_DEVICE_CERTIFICATE_AUTHORITY_PEM   NULL 


#define keyCLIENT_CERTIFICATE_PEM             "-----BEGIN CERTIFICATE-----\n"\
"    <ric-tls-certificate>  \n"\
"-----END CERTIFICATE-----"


#define keyCLIENT_PRIVATE_KEY_PEM             "-----BEGIN RSA PRIVATE KEY-----\n"\
"    <ric-tls-private-key>  \n"\
"-----END RSA PRIVATE KEY-----"

```

```console
$ cd demos/espressif/esp32_devkitc_esp_wrover_kit/make/
$ make flash monitor
```
