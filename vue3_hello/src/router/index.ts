import {createRouter, createWebHistory} from 'vue-router'
import a from '@/components/a.vue'
import b from '@/components/b.vue'
import c from '@/components/c.vue'
import detail from '@/components/detail.vue'
const router=createRouter({
    history:createWebHistory(),
    routes:[{
        name:'a',
        path:'/a',
        component:a,
       children:[{
        name:'detail',
        path:'detail/:ad/:bd',
        component:detail,
        props:true
       }]
    },{
        name:'b',
        path:'/b',
        component:b
    },{
        name:'c',
        path:'/c',
        component:c
    },{
        path:'/',
        redirect:'/a'
    }]
})






export default router