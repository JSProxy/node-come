const http = require('http');
const path = require('path');
const fs = require('fs');
const eventBus = require('events');
const eventObj = new eventBus.EventEmitter();



http.createServer((req, res) => {

    eventObj.on('fun1', () => {

        res.writeHead(200, {
            'content-Type': 'text/plain'
        });
        res.end('A B C\n');

        console.log('eventEmitter');
    })

    fs.readFile('test.txt',(error,data)=>{
        if(error){
            console.log('读取失败');
        }
        console.log(data);
    })
    eventObj.emit('fun1');


}).listen(3000);

console.log('server run in port 3000');