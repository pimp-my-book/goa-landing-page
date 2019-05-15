import VueRouter from 'vue-router'
//import Vue from 'vue'
//import App from './App'
import Home from './pages/Home'
import Contact from  './pages/Contact'

const routes = [
    {
        path:'/', 
        component: Home,
        name: 'home'
    }, 
    {
        path: '/contact',
        component: Contact,
        name: 'contact'
    }
]

const router = new VueRouter({
    routes
})

export default router