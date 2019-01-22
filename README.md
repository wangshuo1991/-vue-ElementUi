# 预约系统

> 企业客户预约平台

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 前端
- 数据请求 axios

+ 引包
  
```shell

npm i axios -S

```

+ main.js 入口文件中使用

```javascript

import axios from 'axios'

Vue.prototype.$http = axios;

```




    

## 后台nodejs

> 后台服务和api主要使用nodejs，express以及express的中间件。

- 跨域请求设置 
> 前端端口 8080 后端端口 3030  express中 server中设置跨域请求

```javascript

const app = express();

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

```
