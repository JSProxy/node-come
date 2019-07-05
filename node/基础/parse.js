const url = require('url');
const http = require('http');

const start = ()=>{

    const onRequest = (req,res)=>{

        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.")

        res.writeHead(200,{'content-Type':'text/plain'});
        res.write('o p o p');
        res.end();
    }
    http.createServer(onRequest).listen(3000);
    console.log('server run in port 3000');
}

start();
// use
// get
// post
// listen
// exports.start = start;