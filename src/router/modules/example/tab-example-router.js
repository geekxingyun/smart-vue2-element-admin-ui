import Layout from '@/layout'

const tabExampleRouter = {
  path: '/tab',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/tab/index'),
      name: 'Tab',
      meta: { title: 'Tab', icon: 'tab' }
    }
  ]
}
export default tabExampleRouter
