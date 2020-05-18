import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import sales from '@/components/sales'
import sales2 from '@/components/sales2'
import quality from '@/components/quality'
import quality2 from '@/components/quality2'
import demo from '@/components/demo'
import demo2 from '@/components/demo2'
import demo3 from '@/components/demo3'
import product from '@/components/product'
import product2 from '@/components/product2'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index,meta:{title:'乡村指数'}},
    {path: '/sales', name: 'sales', component: sales,meta:{title:'销售数据'}},
    {path: '/sales2', name: 'sales2', component: sales2,meta:{title:'乡村运营'}},
    {path: '/quality', name: 'quality', component: quality,meta:{title:'质量管理'}},
    {path: '/quality2', name: 'quality2', component: quality2,meta:{title:'数字村民'}},
    {path: '/demo', name: 'demo', component: demo,meta:{title:'柱状图'}},
    {path: '/demo2', name: 'demo2', component: demo2,meta:{title:'柱状图2'}},
    {path: '/demo3', name: 'demo3', component: demo3,meta:{title:'柱状图3'}},
    {path: '/product', name: 'product', component: product,meta:{title:'产品数据'}},
    {path: '/product2', name: 'product2', component: product2,meta:{title:'乡村治理'}},
  ]
})
