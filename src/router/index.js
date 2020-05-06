import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import sales from '@/components/sales'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index,meta:{title:'乡村指数'}},
    {path: '/sales', name: 'sales', component: sales,meta:{title:'销售数据'}},
  ]
})
