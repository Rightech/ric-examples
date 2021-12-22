//@ts-check : enable more type checks for editor
//@handler  : Webhook from IFTTT
//@author   : Savichev

function process() {
  const body = ric.webhook?.request?.body ?? {};

  const lat = +(body.lat || 0);
  const lon = +(body.lon || 0);

  /* handler replies with `200 OK` json response by default (if no error occurred)
     but you can override with: */
  // ric.webhook.respondWith({ status: 403, body: { ok: false } });  

  return { lat, lon };
}

/* ↑ here ends original handler code  */
/* ↓ here goes generated debug  code  */

/* 01. define test values */
const config = {};
const packet = {};

/* 02. run handler code */
const result = process(
  
);

/* 03. log handler results */
console.log({
  "lat": result["lat"],
  "lon": result["lon"]
});

