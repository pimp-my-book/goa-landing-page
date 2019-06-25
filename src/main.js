import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import {Collapse} from 'buefy/dist/components/collapse'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import 'buefy/dist/buefy.css'

import router from './router'
Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production'


Vue.component('b-collapse', Collapse)
Vue.use(VueRouter)
Vue.use(VueAnalytics, {

  id:'UA-131906194-1'


})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
