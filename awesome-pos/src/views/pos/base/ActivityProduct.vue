<template>
    <div class="activity-product select-disabled">
        <h3 class="title">热销单品</h3>
        <el-tag
                v-for="item in activityList"
                :key="item.product_name"
                :type="items[item.type].type"
                effect="plain"
                class="product-tag select-disabled"
                @click="addProduct(item.product_name,item.price,item.type)"
        >
            {{ item.product_name }}
            <span class="price">¥{{item.price}}</span>
        </el-tag>
    </div>
</template>

<script>
    export default {
        name: "ActivityProduct",
        props:{
            activityList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                items: [
                    { type: ''},
                    { type: 'success'},
                    { type: 'info'},
                    { type: 'danger'},
                    { type: 'warning'}
                ]
            }
        },
        methods:{
            addProduct(productInfo,productPrice,productType){
                this.$bus.$emit('addProductToPos',productInfo,productPrice,productType)
            }
        }
    }
</script>

<style scoped lang="less">
    .activity-product{
        padding: 0 50px;
        .title{
            text-align: center;
        }
        .product-tag{
            margin:10px 20px;
            line-height:35px;
            height:35px;
            cursor: pointer;
            .price{
                font-weight:bold;
            }
        }
        .product-tag:hover{
            z-index:20;
            transform:scale(1.2);
            transition:all .3s;
        }
    }
</style>