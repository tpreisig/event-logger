const EventEmitter = require('events');
const logMod = require('./logMod');
const path = require('path');

class AnEmitter extends EventEmitter { };
const anEmitter = new AnEmitter();

anEmitter.on('modify', (msg1, msg2) => {
    logMod(msg1);
    console.log(`${msg2}.\n${msg1}.`)
});

setTimeout(function (msg1, msg2) {
    anEmitter.emit('modify', 'Modified and adjusted accordingly', `Check ${path.join(__dirname, 'mod_logs', 'logged.txt')}`);
}, 2000)

