import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase'
import Home from '../views/Home.vue'
import SignIn from '../views/Signin.vue'



const routerHistory = createWebHistory()

const routes = [

    {
        path: '/',
        redirect: '/signin'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/signin'
    },
    {
        path: '/signin',
        name: SignIn,
        component: SignIn
    },
    {
        path: '/home',
        name: Home,
        component: Home,
        meta: {
            requiresAuth: true
        }
    }
 
]

const router = createRouter({
    history: routerHistory,
    routes
})


router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !currentUser) {
      console.log("You are not authorized to access this area.");
      next('signin')
    } else if (!requiresAuth && currentUser) {
      console.log("You are authorized to access this area.");
      next('users')
    } else {
      next()
    }
  })

export default router