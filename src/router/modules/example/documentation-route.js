/**
 * 文档管理
 */
import Layout from '@/layout'

const documentRouter = {
  path: '/documentation',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/documentation'),
      name: 'Documentation',
      meta: { title: '文档', icon: 'documentation', affix: true }
    }
  ]
}
export default documentRouter
