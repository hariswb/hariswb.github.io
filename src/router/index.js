import {createWebHistory,createRouter} from 'vue-router';

import Home from "../views/home.vue";
import Portfolio from "../views/portfolio.vue";
import Resume from "../views/resume.vue";
import NotFound from "../views/notfound.vue"

const routes = [
    {path:'/',name:"home",component:Home},
    {path:'/portfolio',name:"portfolio",component:Portfolio},
    {path:'/resume',name:"resume",component:Resume},
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = new createRouter({
    history:createWebHistory(),
    routes,
})

export default router