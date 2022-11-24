import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/page/Service/index'
import About from '@/page/about/index'
Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import("@/page/home/index")
    },
    {
      path: '/home',
      component: () => import("@/page/home/index")
    },
    {
      path: '/ProductCenter',
      name: 'ProductCenter',
      component: () => import("@/page/ProductCenter/index"),
      children: [{
          path: '/ProductCenter',
          component: () => import("@/page/ProductCenter/components/Insurance/index"),
        },
        {
          path: '/ProductCenter/Insurance',
          name: 'Insurance',
          component: () => import("@/page/ProductCenter/components/Insurance/index"),
        },
        {
          path: '/ProductCenter/inspectaVehicle',
          name: 'inspectaVehicle',
          component: () => import("@/page/ProductCenter/components/inspectaVehicle/index"),
        },
        {
          path: '/ProductCenter/vehicleRefueling',
          name: 'vehicleRefueling',
          component: () => import("@/page/ProductCenter/components/vehicleRefueling/index"),
        }
      ]
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  mode: 'history'
})
