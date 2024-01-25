import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetailsView from '../views/BlogDetailsView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectDetailsView from '../views/ProjectDetailsView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blogdetails',
    name: 'blogdetails',
    component: BlogDetailsView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/projectdetails',
    name: 'projectdetails',
    component: ProjectDetailsView
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
