import BookListView from '@/views/BookListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'booklist',
      component: BookListView,
    },
    {
      path: '/bookdetail/:_id',
      name: 'bookdetail',
      component: () => import('../views/BookDetailView.vue'),
    },
    {
      path: '/adminbooklist',
      name: 'adminbooklist',
      component:()=>import('../views/AdminBooksList.vue')
    },
    {
      path: '/adminbookcreate',
      name: 'adminbookcreate',
      component:()=>import('../views/AdminBooksCreateView.vue')
    },
    {
      path: '/adminbookupdate',
      name: 'adminbookupdate',
      component:()=>import('../views/AdminBooksUpdateView.vue')
    }
  ],
})

export default router
