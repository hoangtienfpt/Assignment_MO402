//mongodb+srv://tienqhph27776:inQUGYlHKO5wa8B8@tienne.rk9nwsz.mongodb.net/?retryWrites=true&w=majority


const mongoose = require('mongoose')


async function connnect (){
    try {
        await mongoose.connect('mongodb+srv://tienqhph27776:inQUGYlHKO5wa8B8@tienne.rk9nwsz.mongodb.net/Assignment?retryWrites=true&w=majority' ,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('connect sucsessfully')
    } catch (error) {
        console.log('connect faild')
    }
}

module.exports = {connnect}