Данное устройство ещё не присылало каких-либо данных, но это можно исправить: 

1. Сгенерируйте [API токен](https://dev.rightech.io/api-tokens#?v=create&scopes=objects_one_packets_post).

2. Отправьте нам немного данных через cURL: 

```console
$ curl -X POST \
  https://{{env}}/api/v1/objects/{{object.id}}/packets \
  -H 'authorization: Bearer <insert API token here>' \
  -H 'content-type: application/json' \
  -d '{"temperature": 36.6, "humidity": 64 }'
```

