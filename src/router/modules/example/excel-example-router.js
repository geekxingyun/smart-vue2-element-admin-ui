import Layout from '@/layout'

const excelExampleRouter = {
  path: '/excel',
  component: Layout,
  redirect: '/excel/export-excel',
  name: 'Excel',
  meta: {
    title: 'Excel',
    icon: 'excel'
  },
  children: [
    {
      path: 'export-excel',
      component: () => import('@/views/example-page/excel/export-excel'),
      name: 'ExportExcel',
      meta: { title: 'Export Excel' }
    },
    {
      path: 'export-selected-excel',
      component: () => import('@/views/example-page/excel/select-excel'),
      name: 'SelectExcel',
      meta: { title: 'Export Selected' }
    },
    {
      path: 'export-merge-header',
      component: () => import('@/views/example-page/excel/merge-header'),
      name: 'MergeHeader',
      meta: { title: 'Merge Header' }
    },
    {
      path: 'upload-excel',
      component: () => import('@/views/example-page/excel/upload-excel'),
      name: 'UploadExcel',
      meta: { title: 'Upload Excel' }
    }
  ]
}
export default excelExampleRouter
