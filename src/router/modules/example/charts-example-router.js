/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsExampleRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '图表示例',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/example-page/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/example-page/charts/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/example-page/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    }
  ]
}

export default chartsExampleRouter
