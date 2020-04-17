<template>
    <div id="pos">
        <div class="left-pos">
            <div class="pos-bar">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="点餐" name="first"><pos-order/></el-tab-pane>
                    <el-tab-pane label="出单" name="second"><pos-record/></el-tab-pane>
                    <el-tab-pane label="备忘录" name="third"><todo-list/></el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div class="right-pos">
            <div class="right-pos-top">
                <activity-product :activity-list="activeList"/>
            </div>
            <div class="right-pos-bottom">
                <order-product-list :product-list="productList"/>
            </div>
        </div>
    </div>
</template>

<script>
    import PosOrder from "./base/PosOrder";
    import PosRecord from "./base/PosRecord";
    import ActivityProduct from "./base/ActivityProduct";
    import {reqGetProducts} from "../../api";
    import {Message} from "element-ui";
    import TodoList from "./base/TodoList";
    import OrderProductList from "./base/OrderProductList";
    export default {
        name: "Pos",
        components:{
            PosOrder,
            ActivityProduct,
            OrderProductList,
            TodoList,
            PosRecord
        },
        data(){
            return {
                activeName: 'first',
                // productList:[]
            }
        },
        computed:{
            activeList(){
                return this.$store.getters.activityList
            },
            productList(){
                return this.$store.state.productList
            }
        },
        created(){
            this.getProducts()
        },
        mounted(){
            this.$bus.$on('productInfoChanged',()=>{
                this.getProducts()
            })
        },
        methods: {
            async getProducts() {
                const result = await reqGetProducts()
                const {status, msg, data} = result
                if (status === 0) {
                    this.$store.commit('initState',data)
                    Message({
                        message: msg,
                        type: 'success'
                    })
                } else {
                    Message({
                        message: msg,
                        type: 'error'
                    })
                }
            }
        },
    }
</script>

<style scoped lang="less">
    @media (max-width:960px) {
        #pos{
            flex-direction: column!important;
            .left-pos{
                width:80vw!important;
            }
        }
    }
    #pos{
        display:flex;
        margin-bottom:40px;
        .left-pos{
            width:30vw;
            border:1px solid #ddd;
            /deep/ .el-tabs__item{
                padding:0 20px;
            }
        }
        .right-pos{
            flex:1;
            display:flex;
            flex-direction: column;
            .right-pos-top{
                min-height:200px;
            }
            .right-pos-bottom{
                min-height:600px;
                overflow: hidden;
            }
        }
    }
</style>