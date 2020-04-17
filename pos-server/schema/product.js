const mongoose = require('mongoose')
let productSchema = new mongoose.Schema({
    product_name:String,
    price:String,
    imgUrl:String,
    activity:String,
    type:{
        type:String,
        default:'0'
    },
    upTime:{
        type:String,
        default:Date.now()
    }
})

module.exports = mongoose.model('products',productSchema)