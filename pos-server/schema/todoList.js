const mongoose = require('mongoose')
let todoListSchema = new mongoose.Schema({
    timeDate:String,
    dataList:Array
})

module.exports = mongoose.model('todos',todoListSchema)