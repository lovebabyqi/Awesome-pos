<template>
    <div id="accounts">
        <h2 v-show="isToday">今日账目记录</h2>
        <h2 v-show="!isToday">所有账目记录</h2>
        <div class="accounts-title"><span>本月总成交金额:{{sumTotal}}</span><span>今日成交金额:{{todayTotal}}</span>
            <el-button type="primary" icon="el-icon-refresh-left" circle @click="handleRefresh"></el-button>
            <el-button @click="toggleAll">查看所有账单</el-button>
            <el-button @click="toggleToday">查看今日账单</el-button>
        </div>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    :stripe=true
                    :default-sort="{prop: 'date', order: 'descending'}"
            >
                <el-table-column type="index" width="50" :index="sumIndex"></el-table-column>
                <el-table-column prop="timeDate" label="日期" sortable width="180" :formatter="formatterDate"></el-table-column>
                <el-table-column prop="orderList" label="商品" width="550" :formatter="formatter"></el-table-column>
                <el-table-column prop="time" label="结算时间" width="100" :formatter="formatterTime"></el-table-column>
                <el-table-column prop="priceTotal" label="金额"></el-table-column>
            </el-table>
        <el-pagination
                layout="prev, pager, next"
                background
                :total="totalLength"
                :page-size="9"
                @current-change="currentPage"
        >
        </el-pagination>
    </div>
</template>

<script>
    import {reqGetAllAccount} from '../../api'
    import {Message} from 'element-ui'

    export default {
        name: "Account",
        created() {
            this.getAllAccount()
        },
        data() {
            return {
                allAccount: [],
                tableData:[],
                totalLength:0,//总条目
                sumTotal:0,//本月累计成交
                todayTotal:0,//今日成交
                page:1,
                todayDate:'',//记录今日日期
                isToday:true
            }
        },
        methods: {
            async getAllAccount() {
                const result = await reqGetAllAccount()
                const {status, msg, data} = result
                if (status === 0) {
                    this.allAccount = Object.freeze(data)
                    this.todayDate = (new Date()).toLocaleDateString()
                    this.todayTotal = (data.filter(item=>item.timeDate===this.todayDate)).reduce((pre,next)=>pre + (+next.priceTotal),0)
                    this.sumTotal = this.allAccount.reduce((pre,next)=>pre + (+next.priceTotal),0)  //本月累计成交
                    this.toggleToday()
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
            },
            sumIndex(index){    //格式化index
              return index + 1 + ((this.page-1) * 8)
            },
            formatter(row, column) {    //格式化商品数据
                return row.orderList.reduce((pre, next) => {
                    return pre + next.productName + 'x' + next.productCount + '单价:' + next.productPrice + '元、'
                },'')
            },
            formatterTime(row,column){  //格式化时间
                if(row.time){
                    let _date = new Date(JSON.parse(row.time))
                    return _date.toLocaleString()
                }else{
                    return '未记录时间'
                }
            },
            formatterDate(row,column){
                return row.timeDate.replace(/\//g,'-')
            },
            currentPage(page){  //点击页数
                this.page = page
                let start = (page-1) * 8;
                let end = page * 8;
                this.tableData = this.allAccount.slice(start,end)
            },
            handleRefresh(){
                this.getAllAccount()
            },
            toggleAll(){
                this.isToday = false
                this.totalLength = this.allAccount.length
                this.tableData = this.allAccount.slice(0,8)//初始展示8条
            },
            toggleToday(){
                this.isToday = true
                let TodayAccount = this.allAccount.filter(item=>item.timeDate===this.todayDate)
                this.totalLength = TodayAccount.length
                this.tableData = TodayAccount.slice(0,8)//初始展示8条
            }
        }
    }
</script>

<style scoped lang="less">
    #accounts{
        margin-bottom:40px;
        .accounts-title{
            span{
                margin-right:20px;
                font-weight: bold;
            }
        }
        .el-table{
            height:700px;
            overflow: auto;
            /deep/ .el-table__row{
                height:40px;
            }
        }
    }
</style>