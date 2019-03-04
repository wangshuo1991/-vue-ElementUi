const express = require('express');
const path = require('path');
const app = express();
const config = require('../../config/index');

// 设置端口
let port = process.env.PORT || config.dev.port;

const router = require('../api/index');


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 使用路由

app.use(router);

// 服务端口
app.listen(3030,()=>{
    console.log(`server is running on port 3030`);
});

