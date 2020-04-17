const Todos = require('../schema/todoList')
//添加todoList
exports.saveTodoList = async cxt=>{
    const {dataList,timeDate} = cxt.request.body
    const result1 = await Todos.findOne({timeDate})
    let result2;
    if(result1){
        result2 = await Todos.create({
            dataList,
            timeDate
        })
        cxt.body = {
            status:0,
            msg:'今日todoList添加成功'
        }
    }else{
        result2 = await Todos.updateOne({timeDate:timeDate},{$set:{
            dataList,
            timeDate
        }})
        cxt.body = {
            status:1,
            msg:'今日todoList已更新'
        }
    }
}
//获取todoList
exports.getAllTodoList = async cxt=>{
    const result = await Todos.find()
    if(result){
        cxt.body = {
            status:0,
            msg:'获取todoList记录成功',
            data:result
        }
    }else{
        cxt.body = {
            status:0,
            msg:'获取todoList记录失败,未找到记录'
        }
    }
}