import VueRouter from 'vue-router'
//import Vue from 'vue'
//import App from './App.vue'
import Home from './pages/Home'
import Contact from  './pages/Contact'
import SubmissionSuccess from './components/Alerts/SubmissionSuccess'
import SubmissionFailure from './components/Alerts/SubmissionFailure'

const routes = [
    {
        path:'/', 
        component: Home,
        
    }, 
    {
        path: '/contact',
        component: Contact,
        name: 'contact',
    },
    {
        path: '/SubmissionSuccess',
        component: SubmissionSuccess

    },
    {
        path: '/SubmissonFailure',
        component: SubmissionFailure
    }
        
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router