const quanaocontroller = require('./../app/controller/quanaocontroller')
const quanaorouter = require('./quanaorouter')
const taikhoanrouter = require('./taikhoanrouter')



function routerfunction(app){
        app.use('/' , quanaorouter)
        app.use('/account' , taikhoanrouter)

}
module.exports  = routerfunction