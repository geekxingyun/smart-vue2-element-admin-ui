import Layout from '@/layout'

const externalLinkExampleRouter = {
  path: 'external-link',
  component: Layout,
  children: [
    {
      path: 'https://github.com/PanJiaChen/vue-element-admin',
      meta: { title: 'External Link', icon: 'link' }
    }
  ]
}
export default externalLinkExampleRouter
