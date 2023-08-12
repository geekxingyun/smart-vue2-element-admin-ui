/**
 * 引导
 */
import Layout from '@/layout/index'

const profileRouter = {
  path: '/profile',
  component: Layout,
  redirect: '/profile/index',
  hidden: true,
  children: [
    {
      path: 'index',
      component: () => import('@/views/profile/index'),
      name: 'Profile',
      meta: { title: '个人中心', icon: 'user', noCache: true }
    }
  ]
}
export default profileRouter
