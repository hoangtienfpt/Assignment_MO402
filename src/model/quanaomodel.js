const mongoose = require('mongoose')
const Schema = mongoose.Schema



const quanaomodel = new Schema({
    namesp:{type:String },
    dongia:{type:Number},
    image:{type:String},
    loaisanpham:{type:String},
    makhachhang:{type:String},
    description:{type:String},
    tenkhachhang:{type:String}
} , {timestamps:true})

module.exports = mongoose.model('official' , quanaomodel)