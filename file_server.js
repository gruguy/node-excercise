'use strict';

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行获取root目录，默认是当前目录
var root = path.resolve(process.argv[2]||'.');
console.log('Static root dir:'+ root);

//创建服务器
var server = http.createServer(function(request,response){
    // 获得url的path，类似  '/css/bootstrap.css'
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地路径，类似 '/srv/ttt/css/bootstrap.css'
    var filepath = path.join(root,pathname);

    fs.stat(filepath,function(err,stats){
        if(!err&&stats.isFile()){
            //没有出错而且文件存在
            console.log('200:'+request.url);
            //发送200响应头
            response.writeHead(200);
            // 将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        }else{
            //出错或者文件不存在
            console.log('404'+request.url);
            // 发送404响应头
            response.writeHead(404);
            response.end('404 not found');


        }
    });
});

server.listen(8081);

console.log('Server is running at http://127.0.0.1:8081/');