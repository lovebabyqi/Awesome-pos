<template>
    <el-form :model="ProductInfo" label-width="80px" size="mini" class="product-form">
        <el-form-item label="商品名陈">
            <el-input v-model="ProductInfo.product_name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
            <el-input v-model="ProductInfo.price"></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
            <el-radio v-model="ProductInfo.type" label="0">汉堡</el-radio>
            <el-radio v-model="ProductInfo.type" label="1">小食</el-radio>
            <el-radio v-model="ProductInfo.type" label="2">饮品</el-radio>
            <el-radio v-model="ProductInfo.type" label="3">套餐</el-radio>
        </el-form-item>
        <el-form-item label="活动性质">
            <el-radio v-model="ProductInfo.activity" label="1">活动促销</el-radio>
            <el-radio v-model="ProductInfo.activity" label="2">非活动</el-radio>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "ProductForm",
        data() {
            return {
                ProductInfo: {
                    product_name: '',
                    price: '',
                    activity: '2',
                    type: '0'
                }
            }
        },
        mounted(){
            this.$bus.$on('updateProduct', (product) => {
                this.ProductInfo.product_name = product.product_name
                this.ProductInfo.price = product.price
                this.ProductInfo.activity = product.activity
                this.ProductInfo.type = product.type
            })
        },
        methods: {
            initForm() {
                this.ProductInfo = {
                    product_name: '',
                    price: '',
                    activity: '2',
                    type: '0'
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .product-form {
        margin-top: 10px;
        width: 60vw;
        display: flex;
        flex-direction: column;

        .el-form-item {
            min-width: 350px;
            max-width: 550px;
        }
    }
</style>