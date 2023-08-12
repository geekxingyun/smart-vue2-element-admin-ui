/**
 * 引导
 */
import Layout from '@/layout'

const guideExampleRouter = {
  path: '/guide',
  component: Layout,
  redirect: '/guide/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/guide'),
      name: 'Guide',
      meta: { title: 'Guide', icon: 'guide', noCache: true }
    }
  ]
}
export default guideExampleRouter
