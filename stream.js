'use strict';

var fs = require('fs');

// 打开一个流
var rs = fs.createReadStream('sample.txt', 'utf-8');

rs.on('data',function(chunk){
   console.log('DATA:');
   console.log(chunk);
});

rs.on('end',function(){
    console.log('the end!');
});

rs.on('error',function(err){
    console.log('error：'+err);
});

// 以流的形式写入文件
var ws1 = fs.createWriteStream('sample.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END');
ws1.end();


var ws2 = fs.createWriteStream('Sample.txt', 'utf-8');
ws2.write(new Buffer('使用Stream写入二进制数据...\n','utf-8'));
ws2.write(new Buffer('End','utf-8'));
ws2.end();

//pipe 所有数据从readable流流向了writable流，即将文件复制原理
var rsp = fs.createReadStream('sample.txt');
var wsp = fs.createWriteStream('copy.txt');

try {  
    rsp.pipe(wsp);
} catch (error) {
    console.log(error);
}