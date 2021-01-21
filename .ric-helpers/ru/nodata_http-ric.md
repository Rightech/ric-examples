Данное устройство ещё не присылало каких-либо данных, но это можно исправить: 

1. Сгенерируйте API токен в [личном кабинете](https://{{env}}/profile#?user=tokens).

2. Отправьте нам немного данных через cURL: 

```console
$ curl -X POST \
  https://{{env}}/api/v1/objects/{{object.id}}/packets \
  -H 'authorization: Bearer <insert API token here>' \
  -H 'content-type: application/json' \
  -d '{"temperature": 36.6, "humidity": 64 }'
```


В случае возникновения вопросов свяжитесь с нашими [техническими специалистами](mailto:development@rightech.io?subject=Telematic%20protocols&body=Im%20interested%20in%20wialon%20devices)  
или напишите в наш [Telegram-чат](https://t.me/rightech_iot)