# MQTTEcho demo task with Amazon FreeRTOS on ESP32


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

Generate X.509 client certificate:

![Generate X.509 client certificate](../../.assets/mqtt-issue-cert.gif)


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


In [lib/include/private/aws_default_root_certificates.h](https://github.com/aws/amazon-freertos/blob/master/lib/include/private/aws_default_root_certificates.h) substitute root certs with ours:

```C
static const char tlsATS1_ROOT_CERTIFICATE_PEM[] =
    "-----BEGIN CERTIFICATE-----\n"
"MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG\n"
"A1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jv\n"
"b3QgQ0ExGzAZBgNVBAMTEkdsb2JhbFNpZ24gUm9vdCBDQTAeFw05ODA5MDExMjAw\n"
"MDBaFw0yODAxMjgxMjAwMDBaMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9i\n"
"YWxTaWduIG52LXNhMRAwDgYDVQQLEwdSb290IENBMRswGQYDVQQDExJHbG9iYWxT\n"
"aWduIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDaDuaZ\n"
"jc6j40+Kfvvxi4Mla+pIH/EqsLmVEQS98GPR4mdmzxzdzxtIK+6NiY6arymAZavp\n"
"xy0Sy6scTHAHoT0KMM0VjU/43dSMUBUc71DuxC73/OlS8pF94G3VNTCOXkNz8kHp\n"
"1Wrjsok6Vjk4bwY8iGlbKk3Fp1S4bInMm/k8yuX9ifUSPJJ4ltbcdG6TRGHRjcdG\n"
"snUOhugZitVtbNV4FpWi6cgKOOvyJBNPc1STE4U6G7weNLWLBYy5d4ux2x8gkasJ\n"
"U26Qzns3dLlwR5EiUWMWea6xrkEmCMgZK9FGqkjWZCrXgzT/LCrBbBlDSgeF59N8\n"
"9iFo7+ryUp9/k5DPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8E\n"
"BTADAQH/MB0GA1UdDgQWBBRge2YaRQ2XyolQL30EzTSo//z9SzANBgkqhkiG9w0B\n"
"AQUFAAOCAQEA1nPnfE920I2/7LqivjTFKDK1fPxsnCwrvQmeU79rXqoRSLblCKOz\n"
"yj1hTdNGCbM+w6DjY1Ub8rrvrTnhQ7k4o+YviiY776BQVvnGCv04zcQLcFGUl5gE\n"
"38NflNUVyRRBnMRddWQVDf9VMOyGj/8N7yy5Y0b2qvzfvGn9LhJIZJrglfCm7ymP\n"
"AbEVtQwdpf5pLGkkeB6zpxxxYu7KyJesF12KwvhHhm4qxFYxldBniYUr+WymXUad\n"
"DKqC5JlR3XC321Y9YeRq4VzW9v493kHMB65jUr9TU/Qr6cf9tveCX4XSQRjbgbME\n"
"HMUfpIBvFSDJ3gyICh3WZlXi/EjJKSZp4A==\n"
    "-----END CERTIFICATE-----\n";

static const char tlsATS2_ROOT_CERTIFICATE_PEM[] =
    "-----BEGIN CERTIFICATE-----\n"
"MIIEaTCCA1GgAwIBAgILBAAAAAABRE7wQkcwDQYJKoZIhvcNAQELBQAwVzELMAkG\n"
"A1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jv\n"
"b3QgQ0ExGzAZBgNVBAMTEkdsb2JhbFNpZ24gUm9vdCBDQTAeFw0xNDAyMjAxMDAw\n"
"MDBaFw0yNDAyMjAxMDAwMDBaMGYxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9i\n"
"YWxTaWduIG52LXNhMTwwOgYDVQQDEzNHbG9iYWxTaWduIE9yZ2FuaXphdGlvbiBW\n"
"YWxpZGF0aW9uIENBIC0gU0hBMjU2IC0gRzIwggEiMA0GCSqGSIb3DQEBAQUAA4IB\n"
"DwAwggEKAoIBAQDHDmw/I5N/zHClnSDDDlM/fsBOwphJykfVI+8DNIV0yKMCLkZc\n"
"C33JiJ1Pi/D4nGyMVTXbv/Kz6vvjVudKRtkTIso21ZvBqOOWQ5PyDLzm+ebomchj\n"
"SHh/VzZpGhkdWtHUfcKc1H/hgBKueuqI6lfYygoKOhJJomIZeg0k9zfrtHOSewUj\n"
"mxK1zusp36QUArkBpdSmnENkiN74fv7j9R7l/tyjqORmMdlMJekYuYlZCa7pnRxt\n"
"Nw9KHjUgKOKv1CGLAcRFrW4rY6uSa2EKTSDtc7p8zv4WtdufgPDWi2zZCHlKT3hl\n"
"2pK8vjX5s8T5J4BO/5ZS5gIg4Qdz6V0rvbLxAgMBAAGjggElMIIBITAOBgNVHQ8B\n"
"Af8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUlt5h8b0cFilT\n"
"HMDMfTuDAEDmGnwwRwYDVR0gBEAwPjA8BgRVHSAAMDQwMgYIKwYBBQUHAgEWJmh0\n"
"dHBzOi8vd3d3Lmdsb2JhbHNpZ24uY29tL3JlcG9zaXRvcnkvMDMGA1UdHwQsMCow\n"
"KKAmoCSGImh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5uZXQvcm9vdC5jcmwwPQYIKwYB\n"
"BQUHAQEEMTAvMC0GCCsGAQUFBzABhiFodHRwOi8vb2NzcC5nbG9iYWxzaWduLmNv\n"
"bS9yb290cjEwHwYDVR0jBBgwFoAUYHtmGkUNl8qJUC99BM00qP/8/UswDQYJKoZI\n"
"hvcNAQELBQADggEBAEYq7l69rgFgNzERhnF0tkZJyBAW/i9iIxerH4f4gu3K3w4s\n"
"32R1juUYcqeMOovJrKV3UPfvnqTgoI8UV6MqX+x+bRDmuo2wCId2Dkyy2VG7EQLy\n"
"XN0cvfNVlg/UBsD84iOKJHDTu/B5GqdhcIOKrwbFINihY9Bsrk8y1658GEV1BSl3\n"
"30JAZGSGvip2CTFvHST0mdCF/vIhCPnG9vHQWe3WVjwIKANnuvD58ZAWR65n5ryA\n"
"SOlCdjSXVWkkDoPWoC209fN5ikkodBpBocLTJIg1MGCUF7ThBCIxPTsvFwayuJ2G\n"
"K1pp74P1S8SqtCr4fKGxhZSM9AyHDPSsQPhZSZg=\n"

```
* ^ (mabe there is more convenient way to do it, but it is good enough for this example)
* You can use [this online tool](https://tomeko.net/online_tools/cpp_text_escape.php) to convert PEM-encoded certificate to C-string.

In [demos/espressif/esp32_devkitc_esp_wrover_kit/common/config_files/aws_demo_config.h](https://github.com/aws/amazon-freertos/blob/master/demos/espressif/esp32_devkitc_esp_wrover_kit/common/config_files/aws_demo_config.h) remove `mqttagentUSE_AWS_IOT_ALPN_443` flag:

```C
/* Do not! Send AWS IoT MQTT traffic encrypted to destination port 443, use 8883 instead */
#define democonfigMQTT_AGENT_CONNECT_FLAGS                 ( mqttagentREQUIRE_TLS )
```

```console
$ cd demos/espressif/esp32_devkitc_esp_wrover_kit/make/
$ make flash monitor
```

Demo will send 12 payloads to `freertos/demos/echo` topic:
```
 [MQTTEcho] MQTT echo attempting to connect to sandbox.rightech.io.
 [MQTTEcho] MQTT echo connected.
 [MQTTEcho] MQTT echo test echoing task created.
 [MQTTEcho] MQTT Echo demo subscribed to freertos/demos/echo
 [MQTTEcho] Echo successfully published 'Hello World 0'
 [Echoing] Message returned with ACK: 'Hello World 0 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 1'
 [Echoing] Message returned with ACK: 'Hello World 1 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 2'
 [Echoing] Message returned with ACK: 'Hello World 2 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 3'
 [Echoing] Message returned with ACK: 'Hello World 3 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 4'
 [Echoing] Message returned with ACK: 'Hello World 4 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 5'
 [Echoing] Message returned with ACK: 'Hello World 5 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 6'
 [Echoing] Message returned with ACK: 'Hello World 6 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 7'
 [Echoing] Message returned with ACK: 'Hello World 7 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 8'
 [Echoing] Message returned with ACK: 'Hello World 8 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 9'
 [Echoing] Message returned with ACK: 'Hello World 9 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 10'
 [Echoing] Message returned with ACK: 'Hello World 10 ACK'
 [MQTTEcho] Echo successfully published 'Hello World 11'
 [Echoing] Message returned with ACK: 'Hello World 11 ACK'
 [MQTTEcho] MQTT echo demo finished.
 [MQTTEcho] ----Demo finished----
```
