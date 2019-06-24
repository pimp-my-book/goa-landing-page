import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstap-vue/dist/bootstrap-vue.css'
import router from './router'
Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAnalytics, {

  id:'UA-131906194-1'


})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
