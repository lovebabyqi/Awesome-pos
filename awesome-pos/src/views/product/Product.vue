<template>
    <div id="product">
        <div class="product-add">
            <add-product ref="addProduct"/>
        </div>
        <div class="product-content">
            <h2>商品列表</h2>
            <div class="product-nav">
                <el-button plain
                           v-for="item in sizeStyle"
                           @click="toggleSize(item.width,item.fontSize)"
                           :key="item.title">
                    {{item.title}}
                </el-button>
                <el-form>
                    <el-form-item label="根据分类查找商品">
                        <el-radio
                                v-for="type in types"
                                v-model="productType"
                                :label="type.value"
                                :key="type.type"
                        >{{type.type}}
                        </el-radio>
                    </el-form-item>
                </el-form>
                <el-input placeholder="输入内容可快速检索" v-model="keyword" @input="searchProduct">
                    <el-select v-model="selectType" slot="prepend" placeholder="请选择">
                        <el-option label="名称" value="product_name"></el-option>
                        <el-option label="价格" value="price"></el-option>
                    </el-select>
                </el-input>
            </div>
            <product-list :style-obj="widthSize" ref="productList"/>
        </div>
    </div>
</template>

<script>
    import AddProduct from "./base/AddProduct";
    import ProductList from "./base/ProductList";

    export default {
        name: "Product",
        components: {
            AddProduct,
            ProductList
        },
        data() {
            return {
                selectType: 'product_name',
                keyword: '',
                productType: '5',//根据分类检索数据
                sizeStyle: [
                    {
                        title: '切换大图',
                        width: '350px',
                        height:'420px',
                        fontSize: '1em'
                    },
                    {
                        title: '切换中图',
                        width: '250px',
                        height:'330px',
                        fontSize: '0.8em'
                    },
                    {
                        title: '切换小图',
                        width: '180px',
                        height:'200px',
                        fontSize: '0.6em'
                    }
                ],
                types: [
                    {type: '显示所有', value: '5'}, {type: '汉堡', value: '0'}, {type: '小食', value: '1'},
                    {type: '饮品', value: '2'}, {type: '套餐', value: '3'}
                ],
                widthSize: {width: '180px', fontSize: '0.8em'},
            }
        },
        methods: {
            toggleSize(width, fontSize) {
                this.widthSize.width = width;
                this.widthSize.fontSize = fontSize;
            },
            toggleList() {
                this.keyword = ''
                this.$refs.productList.toggleList(this.productType)
            },
            searchProduct() {
                this.$refs.productList.search(this.keyword, this.selectType)
            }
        },
        watch: {
            productType() {
                this.toggleList()
            }
        }
    }
</script>

<style scoped lang="less">
    #product {
        margin-bottom:40px;
        h2 {
            border-bottom: 5px solid #ddd;
            padding-bottom: 5px;
        }

        .product-content {
            overflow: hidden;
            .product-nav {
                padding: 5px;
                max-width: 550px;
                margin: auto;

                .el-form {
                    margin-top: 12px;
                }

                .el-input {
                    margin: 0px 0 8px;
                }
            }

            .el-select {
                width: 100px;
            }
        }

    }
</style>