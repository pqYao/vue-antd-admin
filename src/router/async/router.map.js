// 视图组件
const view = {
  tabs: () => import('@/layouts/tabs'),
  blank: () => import('@/layouts/BlankView'),
  page: () => import('@/layouts/PageView')
}

// 路由组件注册
const routerMap = {
  login: {
    authority: '*',
    path: '/login',
    component: () => import('@/pages/login')
  },
  demo: {
    name: '演示页',
    renderMenu: false,
    component: () => import('@/pages/demo')
  },
  exp403: {
    authority: '*',
    name: 'exp403',
    path: '403',
    component: () => import('@/pages/exception/403')
  },
  exp404: {
    name: 'exp404',
    path: '404',
    component: () => import('@/pages/exception/404')
  },
  exp500: {
    name: 'exp500',
    path: '500',
    component: () => import('@/pages/exception/500')
  },
  root: {
    path: '/',
    name: '首页',
    redirect: '/login',
    component: view.tabs
  },
  bid: {
    name: '招标采购',
    icon: 'icon-icon-bid-archive',
    component: view.blank
  },
  prepare: {
    name: '招标准备',
    component: view.page
  },
  create: {
    name: '创建采购项目',
    component: () => import('@/pages/bid/prepare/create/index')
  },
  add: {
    name: '新增采购项目',
    component: () => import('@/pages/bid/prepare/create/add')
  },
  detail: {
    path: 'detail/:id',
    name: '查看采购项目',
    component: () => import('@/pages/bid/prepare/create/detail')
  },
  edit: {
    path: 'edit/:id',
    name: '查看采购项目',
    component: () => import('@/pages/bid/prepare/create/edit')
  },
  exception: {
    name: '异常页',
    icon: 'warning',
    component: view.blank
  }
}
export default routerMap
