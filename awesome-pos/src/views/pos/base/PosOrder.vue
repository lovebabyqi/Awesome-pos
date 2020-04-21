<template>
    <div class="pos-order">
        <el-table
                :data="orderList"
                class="order-list"
                style="width: 100%"
                border
                empty-text="暂无商品"
        >
            <el-table-column prop="productName" label="商品名称"></el-table-column>
            <el-table-column prop="productCount" label="数量" width="80"></el-table-column>
            <el-table-column prop="productPrice" label="单价" width="80"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button
                            type="text"
                            @click="addCount(scope.row)"
                            size="small">
                        添加
                    </el-button>
                    <el-button
                            type="text"
                            @click="deleteCount(scope.row,scope.$index)"
                            size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="total">
            <span>数量:{{countTotal}}</span>
            <span>总计: ¥{{priceTotal}}</span>
        </div>
        <el-button class="add-btn" type="primary" @click="addAccount">结算出单</el-button>
    </div>
</template>

<script>
    import {reqAddAccount} from "../../../api";
    import {Message} from 'element-ui'
    export default {
        name: "PosOrder",
        data() {
            return {
                orderList: []
            }
        },
        mounted() {
            this.$bus.$on('addProductToPos', (productName,productPrice,productType) => {
                if(this.hasProduct(productName)){//如果商品已经存在,添加数量
                    let countItem = this.orderList.filter(item=>item.productName===productName)
                    countItem[0].productCount++
                }else{
                    this.orderList.push({productName,productPrice,productType,productCount:1})
                }
            })
        },
        computed:{
            priceTotal(){
                return this.orderList.reduce((pre,next)=>{
                    return pre + (+next.productPrice*next.productCount)
                },0)
            },
            countTotal(){
                return this.orderList.reduce((pre,next)=>{
                    return pre + (+next.productCount)
                },0)
            }
        },
        methods:{
            hasProduct(productName){//根据商品名称判断是否已经有了该商品,有就添加数量,没有才添加商品
                return this.orderList.some(item=> item.productName===productName)
            },
            addCount(row){//拿到行 数据 添加数量
                row.productCount++
            },
            deleteCount(row,$index){
                if(row.productCount===1){
                    this.orderList.splice($index,1)
                }else{
                    row.productCount--
                }
            },
            async addAccount(){//结算记录账目信息,并清除收银
                if(this.priceTotal!==0){
                    let orderInfo = {}
                    orderInfo.orderList = this.orderList
                    orderInfo.priceTotal = this.priceTotal
                    orderInfo.timeDate = (new Date()).toLocaleDateString()
                    orderInfo.time = Date.now()
                    this.$bus.$emit('addPosRecord',orderInfo)//让PosRecord记录同时添加至服务器
                    const result = await reqAddAccount(orderInfo)
                    const {status,msg} = result
                    if(status===0){
                        Message({
                            message:msg,
                            type:'success'
                        })
                        this.orderList = []
                    }else{
                        Message({
                            message:msg,
                            type:'error'
                        })
                    }
                }else{
                    Message({
                        message:'未添加商品,无需结算',
                        type:'info'
                    })
                }

            }
        }
    }
</script>

<style scoped lang="less">
    .pos-order{
        .order-list{
            min-height:600px;
            overflow-y: scroll;
        }
        .add-btn{
            margin:10px;
        }
        .total{
            position:relative;
            height:40px;
            overflow: hidden;
            border-bottom: 3px solid #ddd;
            span{
                line-height:40px;
                font-weight: bold;
                float:right;
                margin:0 20px;
                color:#f56c6c;
            }
        }
    }
</style>