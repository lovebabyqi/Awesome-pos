const Accounts = require('../schema/account')
//添加单条账目
exports.addAccount = async cxt => {
    const { orderList, priceTotal, timeDate, time } = cxt.request.body
    const result = await Accounts.create({
        orderList,
        priceTotal,
        timeDate,
        time
    })
    if (result) {
        cxt.body = {
            status: 0,
            msg: '结算成功,已记录账目'
        }
    } else {
        cxt.body = {
            status: 1,
            msg: '结算失败'
        }
    }
}
//获取所有账目信息
exports.getAllAccount = async cxt => {
    const result = await Accounts.find()
    if (result) {
        cxt.body = {
            status: 0,
            msg: '获取账目成功',
            data: result
        }
    } else {
        cxt.body = {
            status: 1,
            msg: '获取账目失败'
        }
    }
}

exports.getAllOrderList = async cxt => {
    const result = await Accounts.find()
    let _arr1 = result.map(item => item.orderList)//只保留orderList
    let _arr2 = _arr1.flat(2)//orderList数组降维
    if (result) {
        cxt.body = {
            status: 0,
            msg: '获取数据成功',
            data: _arr2
        }
    } else {
        cxt.body = {
            status: 1,
            msg: '获取数据失败'
        }
    }
}

exports.getOneDayOrderList = async cxt => {
    const {todayDate} = cxt.query
    const result = await Accounts.find({timeDate:todayDate})
    let _arr1 = result.map(item => item.orderList)//只保留orderList
    let _arr2 = _arr1.flat(2)//orderList数组降维
    if (result) {
        cxt.body = {
            status: 0,
            msg: '获取数据成功',
            data: _arr2
        }
    } else {
        cxt.body = {
            status: 1,
            msg: '获取数据失败'
        }
    }
}