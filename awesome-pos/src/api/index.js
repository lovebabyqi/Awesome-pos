import ajax from "./ajax";
//添加商品
export const reqAddProduct = (data)=>ajax('/product/add',data,'post')
//获取所有商品
export const reqGetProducts = ()=>ajax('/product/getList')
//删除单个商品
export const reqDeleteProduct = (data)=>ajax('/product/deleteOne',data,'post')
//修改单个商品
export const reqUpdateProduct = (data)=>ajax('/product/updateOne',data,'post')

//记录结算账单
export const reqAddAccount = (data)=>ajax('/order/addAccount',data,'post')
//获取所有账目信息
export const reqGetAllAccount = ()=>ajax('/order/getAllAccount')
//获取所有结算orderList
export const reqGetAllOrderList = ()=>ajax('/order/getAllOrderList')
//获取单日结算orderList
export const reqGetOneDayOrderList = (date)=>ajax('/order/getOneDayOrderList',date,'get')

//提交备忘录
export const reqSaveTodoList = (data)=>ajax('/order/saveTodoList',data,'post')
//获取备忘录
export const reqGetAllTodoList = ()=>ajax('/order/getTodoList')

//上传图片
// export const reqImgUpload = (imageData)=>axios({
//     url: '/img/upload',
//     method: 'post',
//     data: imageData,
//     headers: { 'Content-Type': 'multipart/form-data' },
// })
//删除图片
export const reqDeleteImg = (filename)=>ajax('/img/delete',filename,'post')
