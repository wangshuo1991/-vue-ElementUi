const express = require('express');
const path = require('path');
const router = require('../api/index');

const app = express();

// 使用路由
app.use(router);

// 服务端口
app.listen(3030,()=>{
    console.log('server is running on port 3030');
});