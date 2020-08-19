const http = require('http');

const server = http.createServer(function (req, res) {
  //設定回應為text文件，並回應 Hello World!
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello World!');
});

server.listen('3000',function () {
  console.log('Server start on 3000 port');
});
