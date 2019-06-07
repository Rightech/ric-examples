
Generate API token [here](https://sandbox.rightech.io/api-tokens#?v=create&scopes=objects_one_packets_post).


Then POST some JSON data with example cURL command: 

```console
$ curl -X POST \
  https://{{env}}/api/v1/objects/{{object.id}}/packets \
  -H 'authorization: Bearer <insert API token here>' \
  -H 'content-type: application/json' \
  -d '{"temperature": 36.6, "humidity": 64 }'
```  
