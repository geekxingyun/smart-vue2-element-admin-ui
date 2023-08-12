/**
 * 比对组件示例Demo
 *
 */
import Layout from '@/layout/index'

const compareDataExampleRouter = {
  path: '/compare-data-example-manage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'compareDataComponentExampleManage',
  allowsShow: true,
  meta: {
    roles: ['view-example-role'],
    title: '封装组件示例',
    icon: 'component',
    noCache: true
  },
  children: [
    {
      path: '/compare-data-example-manage/CompareDataTopAndBottomTableStyleCardDemo',
      component: () => import('@/views/compare-data-component-example/CompareDataTopAndBottomTableStyleCardDemo'), // Parent router-view
      name: 'CompareDataTopAndBottomTableStyleCardDemo',
      meta: {
        title: '上下Table前端分页组件示例'
      }
    },
    {
      path: '/analysis-service-manage/CompareDataComponentAllDemoV2',
      component: () => import('@/views/compare-data-component-example/CompareDataComponentAllDemoV2.vue'), // Parent router-view
      name: 'CompareDataComponentAllDemoV2',
      meta: {
        title: '综合比对封装组件示例V2'
      }
    },
    {
      path: '/analysis-service-manage/CompareDataComponentAllDemoV3',
      component: () => import('@/views/compare-data-component-example/CompareDataComponentAllDemoV3.vue'), // Parent router-view
      name: 'CompareDataComponentAllDemoV3',
      meta: {
        title: '综合比对封装组件示例V3'
      }
    }
  ]
}
export default compareDataExampleRouter
