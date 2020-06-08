
This device has not sent any data yet. 

1. Generate API token in your [personal account](https://{{env}}/profile#?user=tokens&tokens.scopes=objects_packet_post).

2. POST some JSON data with example cURL command: 

```console
$ curl -X POST \
  https://{{env}}/api/v1/objects/{{object.id}}/packets \
  -H 'authorization: Bearer <insert API token here>' \
  -H 'content-type: application/json' \
  -d '{"temperature": 36.6, "humidity": 64 }'
```  

If you have any further questions contact our [tech guys](mailto:development@rightech.io?subject=Telematic%20protocols&body=Im%20interested%20in%20http%20devices)    
or contact us at [Telegram](https://t.me/rightech_iot).
