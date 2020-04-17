const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const Static = require('koa-static');
const Router = require('koa-router')
const path = require('path');
const multer = require('koa-multer');
const mongoose = require('mongoose');
const app = new Koa();
const router = new Router();
const {
    addProduct,
    uploadImg,
    deleteImg,
    getProducts,
    deleteOneProduct,
    updateOneProduct
} = require('./controller/product.js')

const {
    addAccount,
    getAllAccount,
    getAllOrderList,
    getOneDayOrderList,
} = require('./controller/orderAccount')

const {saveTodoList,getAllTodoList} = require('./controller/todoList')
// const {
//     saveTodoList,
//     getAllTodoList
// } = require('./controller/todoList')
//解析post数据
app.use(BodyParser());
//配置路由及静态资源访问
app.use(router.routes()).use(router.allowedMethods());
app.use(Static(path.join(__dirname,'public')));

//文件上传
//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        const extname = path.extname(file.originalname);  //以点分割成数组，数组的最后一项就是后缀名
        console.log(file.originalname)
        cb(null, Date.now()  + extname);
        // cb(null, file.originalname);
    }
})
//加载配置
var upload = multer({ storage: storage });

router.post('/product/add',addProduct)
router.post('/product/deleteOne',deleteOneProduct)
router.get('/product/getList',getProducts)
router.post('/product/updateOne',updateOneProduct)

router.post('/img/upload',upload.single('image'),uploadImg)
router.post('/img/delete',deleteImg)

router.post('/order/addAccount',addAccount)
router.get('/order/getAllAccount',getAllAccount)
router.get('/order/getAllOrderList',getAllOrderList)
router.get('/order/getOneDayOrderList',getOneDayOrderList)

router.post('/order/saveTodoList',saveTodoList)
router.get('/order/getTodoList',getAllTodoList)


app.listen(3006,()=>{
    console.log('3006 server success');
})
mongoose.connect('mongodb://localhost:27017/posAdmin',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async ()=>{
    console.log('mongoose connect Success')
}).catch(()=>{
    console.log('mongoose Error Error')
})