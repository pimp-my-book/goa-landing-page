import VueRouter from 'vue-router'
//import Vue from 'vue'
import App from './App.vue'
import Home from './pages/Home'
import Contact from  './pages/Contact'

const routes = [
    {
        path:'/', 
        component: App,
        children: [{
            path: '',
            component: Home
        }]
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