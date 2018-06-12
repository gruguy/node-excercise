'use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

var data = "hello, Node.js";
// fs.writeFile('sample.txt', data, function(err){//异步写文件
//     if(err){
//         console.log(err);
//     } else {
//         console.log('OK!');
//     }
// });

//同步写文件
var data1 = 'Sync Write';
try {
    
fs.writeFileSync('sample.txt',data1);
    
} catch (error) {
    console.log(error);
}


//获取文件大小创建时间等信息，使用fs.stat(),它返回一个stat对象，能告诉我们文件和目录的详细信息

fs.stat('sample.txt',function(err,stat){
    if(err){
        console.log(err);
    } else {
        // 是否是文件
        console.log('isFile:'+stat.isFile());

        // 是否是目录
        console.log('isDirectory:'+ stat.isDirectory());

        if(stat.isFile()){
            //文件大小
            console.log('size:'+stat.size);
            // 创建时间，date对象
            console.log('createtime:'+ stat.birthtime);
            // 修改时间
            console.log('edittime:'+ stat.mtime);
        }
    }
})
