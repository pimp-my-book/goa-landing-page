import VueRouter from 'vue-router'
//import Vue from 'vue'

import Home from './pages/Home'

const routes = [
    {path:'/', components: Home}
]

const router = new VueRouter({
    routes
})

export default router