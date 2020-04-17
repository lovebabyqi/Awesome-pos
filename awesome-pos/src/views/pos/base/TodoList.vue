<template>
    <div class="todo-list">
        <h3 class="title">备忘录todoList</h3>
        <el-input class="todo-input" v-model="serverInputVal" placeholder="请记录下每天特殊事宜,输入内容后回车" @keyup.native.enter="addTodoList"></el-input>
        <div class="showList">
            <div v-if="serverList.length!== 0">
                <div class="showList-item" v-for="(item,index) in serverList" :key="index">{{item}}</div>
            </div>
            <div v-else class="showList-item">今日暂未添加事件,输入内容后回车</div>
        </div>
        <el-button type="primary" class="todo-btn" @click="submitTodoList">提交并清除今日记录</el-button>
    </div>
</template>

<script>
    import {Message} from 'element-ui';
    import {reqSaveTodoList} from "../../../api";
    export default {
        name: "TodoList",
        data(){
            return {
                serverList:[],
                serverInputVal:''
            }
        },
        mounted(){
           let _list = JSON.parse(localStorage.getItem('todoList'))
            if(_list){
                this.serverList = _list
            }
        },
        methods:{
            addTodoList(){
                if(this.serverInputVal.trim()){
                    this.serverList.unshift(this.serverInputVal)
                    this.serverInputVal = ''
                    localStorage.setItem('todoList',JSON.stringify(this.serverList))
                }else{
                    Message({
                        message:'未输入正确内容',
                        type:'error'
                    })
                }
            },
            async submitTodoList(){
                if(this.isAfterWork()){
                    let todoInfo = {}
                    todoInfo.dataList = this.serverList
                    todoInfo.timeDate =(new Date()).toLocaleDateString()
                    const result = await reqSaveTodoList(todoInfo)
                    const {status,msg} = result
                    if(status===0||status===1){
                        localStorage.removeItem('todoList')
                        this.serverList = []
                        Message({
                            message:msg,
                            type:'success'
                        })
                    }else{
                        Message({
                            message:msg,
                            type:'error'
                        })
                    }
                }else{
                    Message({
                        message:'请在每天下班6:00时确认记录后操作,休息时间请勿操作',
                        type:'error'
                    })
                }

            },
            isAfterWork(){
                let nowTime = (new Date()).getHours();
                return nowTime>18?true:false
            }
        }
    }
</script>

<style scoped lang="less">
    .todo-list{
        .title{
            text-align: center;
        }
        .todo-input{
            display:block;
            width:20vw;
            margin:auto;
        }
        .todo-btn{
            margin:10px 15px;
        }
        .showList{
            padding:10px;
            width:28vw;
            margin:auto;
            .showList-item{
                padding: 0 10px;
                height:35px;
                line-height:35px;
                transition:border 1s;
                border:1px solid #ccc;
                border-left:5px solid #209e91;
                border-radius: 5px;
                border-collapse:collapse;
                margin-top:5px;
            }
            .showList-item:hover{
                transition:all 1s;
                border-left:30px solid #209e91;
                background-color:#eee;
            }
        }
    }
</style>