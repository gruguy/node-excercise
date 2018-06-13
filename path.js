'use strict';

var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

var path = require('path');

// 解析当前目录
var workDir = path.resolve('.');

//组合完整的路径
var filePath = path.join(workDir,'pub','index.html');//E:\gits\node-excercise\pub\index.html

console.log(filePath);