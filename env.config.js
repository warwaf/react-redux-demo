/**
 * 编号    作者   时间        类型      描述
 * 0001   war    16/7/12    新增
 */
var temp = 3106;
module.exports = {
    dev: {
        server: {
            port: temp,
            host: 'localhost'
        },
        client: {
            port: temp+1,
            host: 'localhost'
        }
    }
};
