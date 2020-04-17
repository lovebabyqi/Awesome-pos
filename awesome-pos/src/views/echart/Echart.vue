<template>
    <div id="echart-container">

        <el-card class="echart-item">
            <stacked-chart ref="allStacked"/>
            <el-button type="danger" icon="el-icon-refresh-left" circle title="刷新" @click="updateAll"></el-button>
        </el-card>
        <el-card class="echart-item">
            <today-stacked-chart ref="todayStacked"/>
            <el-button type="danger" icon="el-icon-refresh-left" circle title="刷新" @click="updateToday"></el-button>
        </el-card>
    </div>
</template>

<script>
    import TodayStackedChart from './base/TodayStackedChart'
    import StackedChart from "./base/StackedChart";

    export default {
        name: "Echart",
        data() {
            return {
                loading: false
            }
        },
        components: {
            StackedChart,
            TodayStackedChart
        },
        methods: {
            updateAll() {
                this.$refs.allStacked.getAllAccount()
            },
            updateToday() {
                this.$refs.todayStacked.getOrderListInfo()
            }
        }

    }
</script>

<style scoped lang="less">
    #echart-container {
        padding-top: 50px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>