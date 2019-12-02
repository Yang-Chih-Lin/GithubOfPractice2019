// function sayHello(name){
//     console.log('Hello ' + name);
// }
// sayHello('YangChih');
// console.log(module);
// var logger = require('./logger');
// console.log(logger);
// logger.log('message');

// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

/*const os = require('os');
console.log(os.totalmem());
console.log(os.freemem());

const fs = require('fs');
const file = fs.readdirSync('./');
console.log(file);
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});*/

/*const EventEmitter = require ('events');
//Register a listener


//Raise an event
//emitter.emit('messageLogged',{ id: 1, url: 'http://'});
//emit - macking a noise, produce sth.

//Raise: logging (data : message)

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged',(arg) => {
    console.log('Listner called', arg)
});
logger.log('message');*/

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

// server.on('connection', (socket) =>{
//     console.log('New connection...')
// })
server.listen(3000);//在瀏覽器輸入localhost:3000

console.log('Listening on port 3000 ...');