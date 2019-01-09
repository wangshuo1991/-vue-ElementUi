const express = require('express');
const path = require('path');
const app = express();


const router = require('../api/index');

// 使用路由
app.use(router);

// 服务端口
app.listen(8081,()=>{
    console.log('server is running on port 8081');
});