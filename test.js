process.nextTick(function(){
    console.log("nextTick callback");//下一次事件循环才会执行
});

console.log("nextTick was set");

// 判断JavaScript执行环境

if(typeof(window)=="undefined"){
    console.log("node.js");
}else{
    conaole.log("broswer");
}