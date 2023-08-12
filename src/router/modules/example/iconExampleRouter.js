/**
 *
 */
import Layout from '@/layout'

const iconExampleRouter = {
  path: '/icon',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/icons/index'),
      name: 'Icons',
      meta: { title: '图标示例', icon: 'icon', noCache: true }
    }
  ]
}
export default iconExampleRouter
