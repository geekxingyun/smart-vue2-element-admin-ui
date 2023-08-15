import Layout from '@/layout'

const tabExampleRouter = {
  path: '/tab',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/example-page/tab/index'),
      name: 'Tab',
      meta: { title: 'Tab', icon: 'tab' }
    }
  ]
}
export default tabExampleRouter
