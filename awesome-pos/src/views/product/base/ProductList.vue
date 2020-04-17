<template>
    <div id="product-list" class="select-disabled">
        <el-card v-for="item in showList" :key="item._id" :style="styleObj" class="select-disabled">
            <img v-lazy="item.imgUrl" class="image">
            <div style="padding: 14px;">
                <span>{{item.product_name}}</span>
                <span class="price">¥{{item.price}}</span>
                <div class="bottom clearfix">
                    <time class="time">{{ item.upTime|stringTime }}</time>
                    <div class="button">
                        <el-button type="text" @click.stop="deleteOne(item._id)">删除</el-button>
                        <el-button type="text" @click.stop="updateOne(item)">修改</el-button>
                    </div>
                </div>
            </div>
        </el-card>
        <el-card v-if="showList.length===0">
            <div><h2>未检索到商品,请检查检索条件</h2></div>
        </el-card>
    </div>
</template>

<script>
    import {reqDeleteProduct} from "../../../api";

    export default {
        name: "ProductList",
        props: ['styleObj'],
        data() {
            return {
                typeList: [],
                showList: []
            }
        },
        computed: {
            products() {
                return this.$store.state.productList
            }
        },
        created() {
            this.typeList = this.showList = this.products
        },

        filters: {
            stringTime(time) {
                let date = new Date(JSON.parse(time))
                return date.toLocaleString()
            }
        },
        watch: {
            products(newProducts,old) {
                this.typeList = this.showList = this.products
            }
        },
        methods: {
            deleteOne(_key) {
                this._key = _key;//保存到实例,不然后面无法传递
                this.$confirm('此操作将永久删除该商品, 是否继续?', '是否删除', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    this.reqDelete(_key)
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '已取消删除'
                    });
                });

            },
            async reqDelete(_key) {
                const result = await reqDeleteProduct({_key: _key})
                const {status, msg} = result;
                if (status === 0) {
                    this.$message({
                        message: msg,
                        type: 'success'
                    })
                    this.$bus.$emit('productInfoChanged')
                } else {
                    this.$message({
                        message: msg,
                        type: 'error'
                    })
                }
            },
            updateOne(product) {
                //传递给productForm修改数据
                this.$bus.$emit('updateProduct', product)
                this.$nextTick(() => {
                    window.scrollTo(0, 0)
                });
            },
            search(keyword = '', selectType) {
                this.showList = this.typeList.filter(item => {
                    return new RegExp(keyword, 'ig').test(item[selectType])
                })
            },
            toggleList(type) {
                if (type === '5') {
                    this.showList = this.products
                } else {
                    this.showList = this.typeList = this.products.filter(item => {
                        return item.type === type
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">
    #product-list {
        display: flex;
        min-height: 600px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        .el-card {
            align-self:flex-start;
            box-sizing: border-box;
            padding: 5px;
            position: relative;
            margin-left:4px;
            overflow: hidden;
            /*min-height: 200px;*/
            /*max-height: 420px;*/
            /*height:400px;*/
            margin-bottom: 10px;

            .price {
                color: red;
                font-weight: bold;
                font-size: 1.3em;
                position: absolute;
                right: 25px;
            }

            .image {
                width: 100%;
                height: 100%;
                display: block;
            }

            .bottom {
                margin-top: 13px;
                line-height: 12px;
                position: relative;

                .time {

                    font-size: 13px;
                    color: #999;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .button {
                    padding: 0 5px;
                    position: absolute;
                    right: 0;
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