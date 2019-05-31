import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import Vue from 'vue'
//import App from './App.vue'
import Home from './pages/Home'
import Contact from  './pages/Contact'
import SubmissionSuccess from './components/Alerts/SubmissionSuccess'
import SubmissionFailure from './components/Alerts/SubmissionFailure'
import NotFound from './components/Bodies/NotFound'
import HowItWorks from './pages/HowItWorks'
import Support from './pages/Support'

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
        path: '/submission-failure',
        component: SubmissionSuccess,
        name:'SubmissionSuccess'

    },
    {
        path: '/submission-failure',
        component: SubmissionFailure,
        name: 'SubmissionFailure'
    },
    {
      path: '/how-it-works',
      component: HowItWorks,
      name:'HowItWorks'
    },
    {
      path: '/support',
      component: Support,
      name: 'Support'
    },
    {
        path: '*',
        component: NotFound,
        name: 'NotFound'
    }
        
]


Vue.use(VueAnalytics, {
    id:'UA-131906194-1'
  })


const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router