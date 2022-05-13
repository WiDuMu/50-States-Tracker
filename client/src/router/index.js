import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import VisitedStateList from '@/components/VisitedStateList'
import NotFound from '@/components/NotFound'

export default createRouter({
    history: createWebHashHistory(),
    routes: [ // URL extensions that are allowed
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/visited',
            name: 'VisitedStateList',
            component: VisitedStateList
        },
        { //Magic 404 message
            path: '/:pathMatch(.*)*', // Magic url is magic, matches everything
            name: 'NotFound',
            component: NotFound
        }
    ]
})