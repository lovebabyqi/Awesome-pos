const mongoose = require('mongoose')
let accountSchema = new mongoose.Schema({
    orderList:Array,
    priceTotal:String,
    timeDate:String,
    time:String,
})

module.exports = mongoose.model('accounts',accountSchema)