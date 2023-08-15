import Layout from '@/layout'

const errorLogExampleRouter = {
  path: '/error-log',
  component: Layout,
  children: [
    {
      path: 'log',
      component: () => import('@/views/example-page/error-log/index'),
      name: 'ErrorLog',
      meta: { title: 'Error Log', icon: 'bug' }
    }
  ]
}
export default errorLogExampleRouter
