<template>
    <div class="pos-record">
        <h3 class="record-title" v-if="recordList.length===0">今日暂未出单</h3>
        <h3 class="record-title" v-else>今日出单</h3>
        <el-button type="danger" class="record-btn" @click="clearRecord">清除今日出单</el-button>
        <el-card class="box-card" v-for="(item,index) in recordList" :key="item.index">
            <h3 class="title">{{item.time|stringTime}}</h3>
            <div class="text item" v-for="(cItem,cIndex) in item.orderList" :key="cIndex">
                {{cItem.productName}}
                <span class="item-count">数量:{{cItem.productCount}}</span>
                <span class="item-price">¥:{{cItem.productPrice}}</span>
            </div>
            <span class="price-total">总计: ¥{{item.priceTotal}}</span>
        </el-card>

    </div>
</template>

<script>
    import {reqSaveTodoList} from "../../../api";
    import {Message} from "element-ui";

    export default {
        name: "PosRecord",
        data() {
            return {
                recordList: []
            }
        },
        created() {
            this.recordList = JSON.parse(localStorage.getItem('posRecord')) || []
        },
        mounted() {
            this.$bus.$on('addPosRecord', (Record) => {
                this.recordList.push(Record)
                localStorage.setItem('posRecord', JSON.stringify(this.recordList))
            })
        },
        filters: {
            stringTime(time) {
                let date = new Date(JSON.parse(time))
                return date.toLocaleString('chinese',{hour12:false})
            }
        },
        methods: {
            clearRecord() {
                if (this.isAfterWork()) {
                    localStorage.removeItem('posRecord')
                    this.recordList = []
                } else {
                    Message({
                        message: '请在每天下班6:00时确认记录后操作,休息时间请勿操作',
                        type: 'error'
                    })
                }

            },
            isAfterWork() {
                let nowTime = (new Date()).getHours();
                return nowTime > 18 ? true : false
            }
        }
    }
</script>

<style scoped lang="less">
    .pos-record {
        overflow: hidden;

        .record-title {
            text-align: center;
        }

        .record-btn {
            margin-left: 100px;
        }

        .box-card {
            margin: 10px auto;
            width: 360px;
            padding: 10px;

            .title {
                border-bottom: 1px solid #ddd;
            }

            .text {
                font-size: 14px;
            }

            .item {
                padding: 18px 0;
                position: relative;
                line-height: 18px;

                .item-count {
                    position: absolute;
                    right: 100px;
                }

                .item-price {
                    width: 50px;
                    position: absolute;
                    right: 10px;
                    color: red;
                }
            }

            .price-total {
                color: red;
                font-weight: bold;
            }
        }

        .box-card:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.7);
        }
    }
</style>