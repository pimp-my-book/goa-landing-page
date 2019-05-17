import VueRouter from 'vue-router'
//import Vue from 'vue'
//import App from './App.vue'
import Home from './pages/Home'
import Contact from  './pages/Contact'
import SubmissionSuccess from './components/Alerts/SubmissionSuccess'
import SubmissonFailure from './components/Alerts/SubmissonFailure'

const routes = [
    {
        path:'/', 
        component: Home,
        
    }, 
    {
        path: '/contact',
        component: Contact,
        name: 'contact',
        children:[{
            path: 'SubmissionSuccess',
            component: SubmissionSuccess

        },
        {
            path: 'SubmissonFailure',
            component: SubmissonFailure
        }
    ]
    }
]

const router = new VueRouter({
    routes
})

export default router