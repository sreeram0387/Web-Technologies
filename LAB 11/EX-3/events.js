const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.on('greet', (name) => {
    console.log(`Welcome to the event-driven app, ${name}!`);
});

emitter.on('dataEvent', (data) => {
    console.log(`Data received: ${data}`);
});

console.log('Program started');

setTimeout(() => {
    emitter.emit('greet', 'Sreeram');
}, 1000);

setTimeout(() => {
    emitter.emit('dataEvent', 'Sample Data');
}, 2000);

console.log('Program ended');
