import {createRouter, createWebHistory, RouterView} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () =>import('../views/HomeView.vue')
    },

    {
      path: '/our-work',
      name: 'Our Work',
      component: () =>import('../views/OurWork.vue')
    },

    {
      path: '/contact-us',
      name: 'Contact Us',
      component: () =>import('../views/ContactUs.vue')
    },

    {
      path: '/custom-websites',
      name: 'customWebsites',
      component: () =>import('../views/CustomWebsites.vue')
    },

    {
      path: '/templates',
      name: 'Templates',
      component: () =>import('../views/Templates.vue')
    },

    {
      path: '/blog',
      component: RouterView,
      children:[
        {
          path: '',
          name: 'Blog',
          component: () =>import('../views/Blog.vue')
        },
        {
          path: ':id',
          name: 'Blog Inner',
          component: () =>import('../views/blogInner.vue')
        }
      ]
    },

  ]
})

export default router
