import {createWebHistory,createRouter} from 'vue-router';

import Home from "../views/home.vue";
import Portfolio from "../views/portfolio.vue";
import Resume from "../views/resume.vue";

const routes = [
    {path:'/',name:"home",component:Home},
    {path:'/portfolio',name:"portfolio",component:Portfolio},
    {path:'/resume',name:"resume",component:Resume}
]

const router = new createRouter({
    history:createWebHistory(),
    routes,
})

export default router