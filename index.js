const http = require('http');

const hostname = '0';
const port = 80;

const server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});

