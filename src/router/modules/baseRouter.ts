import { RouteRecordRaw } from 'vue-router'
const baseRouter: Array<RouteRecordRaw> = [
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '资源未找到'
    }
  }
]

export default baseRouter
