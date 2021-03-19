var mqtt = require('mqtt');
const { TEMPERATURE_TOPIC, HUMIDITY_TOPIC } = require('./topics');

var client  = mqtt.connect('mqtt://broker.mqttdashboard.com')

client.on('connect', ()=>{
    console.log('connected!!!');
});

client.on('error', err=>{
    console.log('<<<<Error>>>>\n', err);
});


setInterval(()=>{
    const Tempdata = {
        name:'Temperature',
        value: randomGenerator(10,45),
        unit: '°C',
        time: new Date().toTimeString()
    };
    client.publish(TEMPERATURE_TOPIC, JSON.stringify(Tempdata));

    const humData = {
        name:'Humidity',
        value: randomGenerator(40,45),
        unit: 'g/m3',
        time: new Date().toLocaleTimeString()
    };

    client.publish(HUMIDITY_TOPIC, JSON.stringify(humData))
}, 2000);


// Helper functions

const randomGenerator = (min, max) => {
    const mid = Math.random();
    return max - ((1 - mid) * (max-min)).toFixed(4); 
};
