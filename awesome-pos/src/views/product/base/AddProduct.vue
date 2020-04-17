<template>
    <div class="add-product">
        <h2 v-show="isAdd">添加商品</h2>
        <h2 v-show="!isAdd">修改商品</h2>
        <upload-pic ref="uploadImg"/>
        <product-form ref="form"/>
        <el-button type="primary" @click='handleSubmit'>提交</el-button>
    </div>
</template>

<script>
    import {reqAddProduct, reqUpdateProduct} from "../../../api";
    import UploadPic from "./UploadPic";
    import ProductForm from "./ProductForm";
    import {Message} from 'element-ui'

    export default {
        name: "AddProduct",
        components: {
            UploadPic,
            ProductForm
        },
        computed:{
            isAdd(){
                return this.submitType === 'add'
            }
        },
        data() {
            return {
                submitType: 'add',//提交类型分为add 和 update 默认add
            }
        },
        mounted() {
            this.$bus.$on('updateProduct', (product) => {
                this.submitType = 'update'
            })
        },
        methods: {
            handleSubmit() {
                let formInfo = Object.assign(this.$refs.form.ProductInfo)
                formInfo.imgUrl = this.$refs.uploadImg.imgUrl
                formInfo.upTime = Date.now()
                this.$bus.$emit('productInfoChanged')
                if (this.submitType === 'update') {
                    this.handleUpdate(formInfo)
                } else if (this.submitType === 'add') {
                    this.handleAdd(formInfo)
                }
                this.$bus.$emit('productInfoChanged')
            },
            async handleUpdate(formInfo) {
                const result = await reqUpdateProduct(formInfo)
                const {status, msg} = result
                this.messageInfo(msg, status)
            },
            async handleAdd(formInfo) {
                const result = await reqAddProduct(formInfo)
                const {status, msg} = result;
                this.messageInfo(msg, status)
            },
            initFormInfo() { //添加或修改成功后 初始化
                this.$refs.uploadImg.initUrl()
                this.$refs.form.initForm()
                this.submitType = 'add'//每次修改后初始
            },
            messageInfo(msg, status) {
                if (status === 0) {
                    Message({
                        message: msg,
                        type: 'success'
                    })
                    this.initFormInfo()
                } else {
                    Message({
                        message: msg,
                        type: 'error'
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .add-product {
        width: 550px;
        margin: auto;

        h2 {
            border-bottom: 5px solid #ddd;
            padding-bottom: 5px;
        }
    }
</style>