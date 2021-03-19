var mqtt = require('mqtt')

var client  = mqtt.connect('mqtt://broker.mqttdashboard.com')

client.on('connect',  () => {
  client.subscribe('sonic-lab_fidel',  err => {
    if (err) {
      return console.log('connection error >>> ', err);
    }
    console.log('connected!!!');
  });
});
 
client.on('message',  (topic, message) => {
  // message is Buffer
  console.log('Topic >> ', topic);
  console.log('Message >> ', message.toString());
});


let counter = 0;

setInterval(()=>{
    client.publish('sonic-lab_setting', `${JSON.stringify({id:counter++,name:'Jon snow'})}` );
}, 1000);
