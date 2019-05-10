import VueRouter from 'vue-router'
//import Vue from 'vue'
//import App from './App'
import Home from './pages/Home'

const routes = [
    {
        path:'/', 
        components: Home,
        name: 'home'
    }
]

const router = new VueRouter({
    routes
})

export default router