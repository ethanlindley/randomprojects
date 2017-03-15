var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hi!');
});

server.listen(4200, '127.0.0.1');
console.log('now listening to port 4200')