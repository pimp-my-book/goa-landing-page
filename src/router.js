/**
 * Copyright (c) 2019-present, Pimp My Book.
 *
 * 
 */




/*
This is the router file that has links to 
all the page components in the app.

*/


import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import Vue from 'vue'
//import App from './App.vue'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SubmissionSuccess from './components/Alerts/SubmissionSuccess'
import SubmissionFailure from './components/Alerts/SubmissionFailure'
import NotFound from './components/Bodies/NotFound'
import HowItWorks from './pages/HowItWorks'
import Support from './pages/Support'
import Explainer from './pages/Explainer'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import About from './pages/About'

const routes = [
    {
        path: '/',
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
        name: 'SubmissionSuccess'

    },
    {
        path: '/submission-failure',
        component: SubmissionFailure,
        name: 'SubmissionFailure'
    },
    {
        path: '/bursaries',
        component: HowItWorks,
        name: 'bursaries'
    },
    {
        path: '/how-it-works',
        component: Explainer,
        name: 'Explainer'
    },
    {
        path: '/faq',
        component: Support,
        name: 'faq'
    },
    {
        path: '/terms',
        component: Terms,
        name: 'Terms'
    },
    {
        path: '/privacy',
        component: Privacy,
        name: 'Privacy'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    {
        path: '*',
        component: NotFound,
        name: 'NotFound'
    }

]


Vue.use(VueAnalytics, {
    id: 'UA-131906194-1'
})


const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router