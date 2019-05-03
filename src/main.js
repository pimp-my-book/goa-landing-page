import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false


Vue.use(VueAnalytics, {
  id: process.env.GA_ID
})

new Vue({
  render: h => h(App),
}).$mount('#app')
