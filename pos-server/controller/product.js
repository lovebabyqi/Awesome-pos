const { deleteFile } = require('../model/file')
const Products = require('../schema/product')
//添加商品
exports.addProduct = async cxt => {
    const { product_name, price, activity, imgUrl, upTime ,type} = cxt.request.body
    const result1 = await Products.findOne({ product_name })
    if (result1) {
        cxt.body = {
            status: 1,
            msg: '该商品名称重复,请检查'
        }
    } else {
        const result2 = await Products.create({
            product_name,
            price,
            imgUrl,
            activity,
            upTime,
            type
        })
        if (result2) {
            cxt.body = {
                status: 0,
                msg: '添加商品成功'
            }
        } else {
            cxt.body = {
                status: 2,
                msg: '添加商品失败'
            }
        }
    }

}
//修改商品
exports.updateOneProduct = async cxt => {
    const { product_name, price, activity, imgUrl, upTime,type } = cxt.request.body
    const result = await Products.updateOne({ product_name: product_name }, {
        $set: {
            product_name,
            price,
            imgUrl,
            activity,
            upTime,
            type
        }
    })
    if(result){
        cxt.body = {
            status:0,
            msg:'商品数据修改成功'
        }
    }else{
        cxt.body = {
            status:1,
            msg:'商品数据修改失败'
        }
    }
}
//删除单个商品
exports.deleteOneProduct = async cxt => {
    const { _key } = cxt.request.body
    const result = await Products.findById(_key)
    if (result) {
        const { imgUrl } = result;
        await Products.deleteOne({ _id: _key })
        cxt.body = {
            status: 0,
            msg: '删除单个商品成功'
        }
        deleteFile(imgUrl);//删除数据同时要删除图片
    } else {
        cxt.body = {
            status: 1,
            msg: '未查询到该商品,刷新再试试'
        }
    }
}
//获取所有商品
exports.getProducts = async cxt => {
    const result = await Products.find();
    if (result) {
        cxt.body = {
            status: 0,
            msg: '获取全部商品成功',
            data: result
        }
    } else {
        cxt.body = {
            status: 0,
            msg: '获取商品失败'
        }
    }
}
//上传图片返回路径
exports.uploadImg = async cxt => {
    const { filename } = cxt.req.file
    cxt.body = {    //图片上传后台成功
        status: 0,
        msg: '图片上传后台成功',
        data: {
            name: filename,
            url: `/uploads/${filename}`
        }
    }
}
//删除图片
exports.deleteImg = async cxt => {
    const { filename } = cxt.request.body;
    deleteFile(filename);
    cxt.body = {
        status: 0,
        msg: '删除图片成功'
    }
}