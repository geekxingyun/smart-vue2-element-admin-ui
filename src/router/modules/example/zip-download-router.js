import Layout from '@/layout'

const zipExampleRouter = {
  path: '/zip',
  component: Layout,
  redirect: '/zip/download',
  alwaysShow: true,
  name: 'Zip',
  meta: { title: 'Zip', icon: 'zip' },
  children: [
    {
      path: 'download',
      component: () => import('@/views/example-page/zip/index'),
      name: 'ExportZip',
      meta: { title: 'Export Zip' }
    }
  ]
}
export default zipExampleRouter
