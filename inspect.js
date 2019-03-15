
 /**
  * 激活调试：node --inspect inspect.js
  * http服务：使nodejs脚本一直运行
  * 使用http服务脚本激活nodejs
  * 基于express框架搭建http服务
  * 
  *锁死版本号： package-lock.json

  运行程序：node inspect.js==>浏览器访问localhost:3000
  
  */
const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send('hello world! 123'));//ES语法
app.listen(3000,function(){
    console.log('程序运行在 3000端口了！')
});
