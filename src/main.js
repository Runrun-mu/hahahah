// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Search from './components/Search'
import Homepage from './components/Homepage'
import './assets/css/search.css'
import './assets/css/login.css'
//import VueResource from 'vue-resource'
import Add from './components/Add'
import Detail from'./components/Detail'
import ElementUI from'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Edit from './components/Edit'
import Email from './components/Email'
import AddCustomer from './components/AddCustomer'
import CustomerMessage from './components/CustomerMessage'

Vue.config.productionTip = false
Vue.use(VueRouter)
//Vue.use(VueResource)
Vue.use(ElementUI)
Vue.prototype.$http = axios

//…Ë÷√¬∑”…
const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:"/admin",component:Homepage},
    {path:"/admin/login",component:Login},
    {path:"/admin/search",component:Search},
    {path:"/admin/add",component:Add},
    {path:"/admin/car/:id",component:Detail},
    {path:"/admin/edit/:id",component:Edit},
    {path:"/admin/email",component:Email},
    {path:"/customer/add",component:AddCustomer},
    {path:"/customer/detail/:id",component:CustomerMessage}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  el:"#app",
  template: `
    <App/>
  `,
  components: {
    App
  }
})
