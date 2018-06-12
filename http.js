'use strict';

//导入HTTP模块
var http = require('http');

//创建HTTP server，并传入回掉函数
var server = http.createServer(function(request,response){
    console.log(request.method);
    console.log(request.url);

    response.writeHead(200,{'Content-Type': 'text/html'});

    response.end('<h1>Hello World!</h1>');
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');