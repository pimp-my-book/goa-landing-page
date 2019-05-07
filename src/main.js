import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import router from './router'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAnalytics, {
  id:'UA-131906195-1'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
