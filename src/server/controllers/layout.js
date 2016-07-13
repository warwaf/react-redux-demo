/**
 * 编号    作者   时间        类型      描述
 * 0001   war    16/7/5    新增      新增..
 */
module.exports = function (app,co) {
    app.route('/layout')
        .get(function (req,res) {
            co(function *() {
               res.json({
                   status:"success",
                   data:{
                       links:'wangwei'
                   }
               })
            }).catch(F.handleErr.bind(null, res))
        })
};