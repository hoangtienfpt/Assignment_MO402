const express = require('express')
const taikhoanrouter  =express.Router()
const taikhoancontroller = require('./../app/controller/taikhoancontroler')




taikhoanrouter.get('/signup' , taikhoancontroller.singup)
taikhoanrouter.post('/signup/add' , taikhoancontroller.add)
taikhoanrouter.get('/dangnhap' , taikhoancontroller.checklogin)
taikhoanrouter.get('/listuser' , taikhoancontroller.index)
taikhoanrouter.get('/login' , taikhoancontroller.login)
taikhoanrouter.delete('/:id/delete' , taikhoancontroller.delete)
taikhoanrouter.put('/:id/edit' , taikhoancontroller.update)
taikhoanrouter.get('/:id', taikhoancontroller.edit)



module.exports = taikhoanrouter