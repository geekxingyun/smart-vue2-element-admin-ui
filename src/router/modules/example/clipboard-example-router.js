import Layout from '@/layout'

const clipboardExampleRouter = {
  path: '/clipboard',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/clipboard/index'),
      name: 'ClipboardDemo',
      meta: { title: 'Clipboard', icon: 'clipboard' }
    }
  ]
}
export default clipboardExampleRouter
