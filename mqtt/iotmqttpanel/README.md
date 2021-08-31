# Connect object to [`IoT MQTT Panel`](https://play.google.com/store/apps/details?id=snr.lab.iotmqttpanel.prod) app

### 1. Create new MQTT object for panel app

![Create MQTT Object](./assets/01_panel_object.png)

### 2. Create automaton with 2 models

![Create automaton](./assets/02_create_automaton.png)

Automaton will send `PUBLISH` command to `MQTT IoT Panel` object for every packet from first device.  

![Send PUBLISH](./assets/03_automaton_publish.png)

For PUBLISH command specify JSON payload, for example:

```json
{
  "param1": "{{objects[0].state.speed}}",
  "param2": "{{objects[0].state.angle}}"
}
```

### 3. Start automaton

![Start automaton](./assets/04_automaton_start.png)

### 4. In `IoT MQTT Panel` app specify topics for panels:

config | view
-------|-----
![Panel config](./assets/05_panel_config.jpg) | ![Panel view](./assets/06_panel_view.jpg)



