const express = require('express')
const router  =express.Router()
const quanaocontroller = require('./../app/controller/quanaocontroller')


router.post('/trangchu/add' , quanaocontroller.add)
router.delete('/trangchu/:id/delete' , quanaocontroller.delete)
router.get('/trangchu/:id/edit' , quanaocontroller.edit)
router.put('/trangchu/:id/edit' , quanaocontroller.update)
router.get('/trangchu/:id' , quanaocontroller.show)
router.get('/trangchu' , quanaocontroller.index)


module.exports = router