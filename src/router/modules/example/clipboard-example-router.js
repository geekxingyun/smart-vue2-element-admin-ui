import Layout from '@/layout'

const clipboardExampleRouter = {
  path: '/clipboard',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/example-page/clipboard/index'),
      name: 'ClipboardDemo',
      meta: { title: 'Clipboard', icon: 'clipboard' }
    }
  ]
}
export default clipboardExampleRouter
