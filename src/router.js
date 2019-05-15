import VueRouter from 'vue-router'
//import Vue from 'vue'
//import App from './App'
import Home from './pages/Home'
import Contact from  './pages/Contact'

const routes = [
    {
        path:'/', 
        components: Home,
        name: 'home'
    }, 
    {
        path: '/contact',
        components: Contact,
        name: Contact
    }
]

const router = new VueRouter({
    routes
})

export default router