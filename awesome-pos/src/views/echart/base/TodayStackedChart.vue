<template>
    <div id="stacked">
        <vue-chart ref="stacked" :options="orgOptions" :auto-resize="true"></vue-chart>
    </div>
</template>

<script>
    import VueChart from 'vue-echarts'
    import 'echarts/lib/chart/pie'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/legend'
    import {reqGetOneDayOrderList} from "../../../api";

    export default {
        name: "Stacked2",
        components:{
            VueChart
        },
        data () {
            return {
                orgOptions:{}
            }
        },
        created(){
            this.getOrderListInfo()
        },
        methods:{
            async getOrderListInfo(){
                let todayDate = new Date().toLocaleDateString()
                const result = await reqGetOneDayOrderList({todayDate})
                const {status,data} = result;
                if(status===0){
                    this.initChart(data)
                }
            },
            initChart(ListInfo){
                let initArr = [
                    {name: '汉堡', value: 0}, {name: '小食', value: 0}, {name: '饮品', value: 0},
                    {name: '套餐', value: 0}
                ];
                //把数据整理放到了后台,拿到的是整理好的数据
                ListInfo.forEach(cItem=>{
                    switch(cItem.productType){
                        case '0':
                            (initArr[0]).value += cItem.productCount*(+ cItem.productPrice);
                            break;
                        case '1':
                            initArr[1].value += cItem.productCount*cItem.productPrice;
                            break;
                        case '2':
                            initArr[2].value += cItem.productCount*cItem.productPrice;
                            break;
                        case '3':
                            initArr[3].value += cItem.productCount*cItem.productPrice;
                            break;
                    }
                })
                this.orgOptions = Object.freeze({   //将配置对象定义在这里,减轻Observer压力
                    title: {
                        text: '今日成交商品,销售额占比',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#42B983'
                        }
                    },
                    tooltip: {
                        show:'true',
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}元 ({d}%)',
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['汉堡', '小食', '饮品', '套餐']
                    },
                    series : [
                        {
                            name: '销售金额',
                            type: 'pie',
                            radius: '55%',
                            roseType: 'angle',
                            animation: true ,
                            data:initArr,
                            // data:[
                            //     {value:235, name:'汉堡'},
                            //     {value:274, name:'小食'},
                            //     {value:310, name:'饮品'},
                            //     {value:335, name:'套餐'},
                            // ]
                        }
                    ]
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #stacked{
        /*padding:50px;*/
    }
</style>