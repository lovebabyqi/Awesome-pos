// import Vue from 'vue'
// import VueRouter from 'vue-router'
// const Home = ()=>import(/*webpackChunkName:'home'*/'../views/home/Home');
const Pos = ()=>import(/*webpackChunkName:'pos'*/'../views/pos/Pos');
const Product = ()=>import(/*webpackChunkName:'pos'*/'../views/product/Product');
const Account = ()=>import(/*webpackChunkName:'pos'*/'../views/acount/Account');
const Echart = ()=>import(/*webpackChunkName:'echart'*/'../views/echart/Echart');
Vue.use(VueRouter);

export const routes = [
  {
    path:'/',
    redirect:'/homePos'
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  //   title:'首页',
  //   icon:'el-icon-s-home'
  // },
  {
    path: '/homePos',
    name: 'Pos',
    component: Pos,
    title:'收银',
    icon:'el-icon-shopping-cart-2'
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    title:'管理',
    icon:'el-icon-setting'
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    title:'账目',
    icon:'el-icon-tickets'
  },
  {
    path: '/echart',
    name: 'Echart',
    component: Echart,
    title:'图表',
    icon:'el-icon-picture'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
