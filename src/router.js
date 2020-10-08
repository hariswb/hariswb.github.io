import {createWebHistory,createRouter} from 'vue-router';
import Foo from "./views/foo.vue";
import Bar from "./views/foo.vue";

const routes = [
    {path:'/foo',name:"Foo",component:Foo},
    {path:'/bar',name:"Bar",component:Bar}
]

const router = new createRouter({
    history:createWebHistory(),
    routes,
})

export default router