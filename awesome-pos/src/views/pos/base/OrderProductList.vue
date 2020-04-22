<template>
    <div id="order-product-list">
        <h3 class="title">所有商品</h3>
        <div class="product-nav">
            <el-button
                    v-for="type in types"
                    @click="toggleList(type.value)"
                    :label="type.value"
                    :key="type.type"
            >{{type.type}}
            </el-button>
        </div>
        <div class="card-list select-disabled" v-if="showList.length!==0">
            <el-card v-for="item in showList" :key="item._id" @click.native.stop="addProduct(item.product_name,item.price,item.type)">
                <img v-lazy='item.imgUrl'
                     class="image">
                <span class="product-name">{{item.product_name}}</span>
                <span class="price">¥{{item.price}}</span>
            </el-card>

        </div>
        <el-card v-else>
            <div><h2>未检索到商品,请检查检索条件</h2></div>
        </el-card>
    </div>
</template>

<script>

    export default {
        name: "OrderProductList",
        props: ['productList'],
        data() {
            return {
                selectType: 'product_name',
                typeList: [],
                showList: [],
                types: [
                    {
                        type: '显示所有',
                        value: '5'
                    },
                    {
                        type: '汉堡',
                        value: '0'
                    },
                    {
                        type: '小食',
                        value: '1'
                    },
                    {
                        type: '饮品',
                        value: '2'
                    },
                    {
                        type: '套餐',
                        value: '3'
                    }
                ],
            }
        },
        filters: {
            stringTime(time) {
                let date = new Date(JSON.parse(time))
                return date.toLocaleString('chinese',{hour12:false})
            }
        },
        methods: {
            toggleList(type) {
                if (type === '5') {
                    this.showList = this.productList
                } else {
                    this.showList = this.typeList = this.productList.filter(item => {
                        return item.type === type
                    })
                }
            },
            addProduct(productInfo,productPrice,productType){
                this.$bus.$emit('addProductToPos',productInfo,productPrice,productType)
            }
        },
        watch:{
            productList(){
                this.showList = this.$props.productList
            }
        }
    }
</script>

<style scoped lang="less">
    #order-product-list {
        min-height: 900px;
        overflow: hidden;

        .title {
            text-align: center;
        }

        .card-list {
            position:absolute;
            display:flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            /deep/.el-card__body{
                padding:5px;
            }
            .el-card {
                box-sizing: border-box;
                position: relative;
                width:210px;
                /*min-width: 100px;*/
                /*max-width: 200px;*/
                max-height: 100px;
                margin: 10px;
                border:2px solid #eee;
                cursor: pointer;
                .product-name{
                    position:absolute;

                    right:20px;
                    width:100px;
                    font-size: 14px;
                    font-weight: 400;
                    white-space: nowrap;
                }
                .price {
                    color: red;
                    font-weight: bold;
                    font-size: 1.3em;
                    position: absolute;
                    right: 25px;
                    bottom:3px;
                }

                .image {
                    width: 50px;
                    height:50px;
                }
            }

        }

        .el-card:hover {
            z-index:20;
            transform:scale(1.2);
            transition:all .3s;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.8);
        }
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>