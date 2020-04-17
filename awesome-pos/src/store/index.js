// import Vue from 'Vue'
// import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{ //存放仓库的初始数据
        productList:[],
    },
    mutations:{ //存放修改仓库数据的同步方法
        initState(state,list){
            state.productList = list
        }
    },
    getters:{//相当于组件的计算属性  基于state里面的数据计算出来的
        activityList(state){
            return state.productList.filter(item=>item.activity==='1')
        }
    }
})