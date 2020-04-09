Данное устройство ещё не присылало каких-либо данных, но это можно исправить: 

1. Сгенерируйте API токен в личном кабинете.

2. Отправьте нам немного данных через cURL: 

```console
$ curl -X POST \
  https://{{env}}/api/v1/objects/{{object.id}}/packets \
  -H 'authorization: Bearer <insert API token here>' \
  -H 'content-type: application/json' \
  -d '{"temperature": 36.6, "humidity": 64 }'
```

