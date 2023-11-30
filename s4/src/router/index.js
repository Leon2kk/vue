import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/IndexComponent';
import ProjectPage from '@/pages/ProjectComponent';
import BlogPage from '@/pages/BlogArticleComponent';
import NewsPage from '@/pages/NewsComponent';
import NotFoundPage from '@/pages/NotFoundComponent';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectPage,
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFoundPage,
  },
  {
    path: '/:CatchAll(.*)',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router