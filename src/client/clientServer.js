/**
 * 编号    作者   时间        类型      描述
 * 0001   war    16/7/12    新增      新增..
 */
var webpack = require('webpack'),
    express = require('express'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    clientConfig = require('../../env.config').dev.client;
    config = require('../../webpack.config');

var app = new express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{ noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/',function (req,res) {
   res.sendfile('./resource/static/dist/index.html');
});

app.listen(clientConfig.port,function (error) {
    if(error){
        console.error(error)
    }else {
        console.info('前端地址: http://localhost:'+clientConfig.port)
    }
});