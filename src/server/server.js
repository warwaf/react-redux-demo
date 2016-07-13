/**
 * 编号    作者   时间        类型      描述
 * 0001   war    16/7/4    新增      新增..
 */
var
    express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),//bodyParser用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
    cookieSession = require('cookie-session'),
    app = express();

/**
 * 全局变量
 * C 配置
 * M 数据model
 * F 方法
 */
global.C = require('./config');
global.M = {};
global.F = require(path.join(C.dir.controller, C.exceptFolder, 'funcs'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession(C.cookieSession));
console.log(path.join(C.dir.model, C.exceptFolder))
require(path.join(C.dir.model, C.exceptFolder)); // model初始化入口
require(path.join(C.dir.controller, C.exceptFolder))(app); // router初始化入口

// 监听端口
app.listen(C.port);

console.log('后台访问地址:http://localhost:'+ C.port);