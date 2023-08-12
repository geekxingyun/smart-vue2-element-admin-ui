import Layout from '@/layout'

const pdfExampleRouter = {
  path: '/pdf',
  component: Layout,
  redirect: '/pdf/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/pdf/index'),
      name: 'PDF',
      meta: { title: 'PDF', icon: 'pdf' }
    }
  ]
}
export default pdfExampleRouter
