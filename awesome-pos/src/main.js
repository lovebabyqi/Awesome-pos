// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import VueLazyLoad from 'vue-lazyload'



// Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.use(VueLazyload,{
  loading:require('./assets/img/placeholder.png')
})

Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
