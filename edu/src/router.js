import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import about from './views/About.vue'
import profile from './views/Profile.vue'
import allsheets from './views/allsheets.vue'
import review from './views/review.vue'
import room from './views/room.vue'
import register from './views/register.vue'
import login from './views/login.vue'
import viewsheet from './views/viewsheet.vue'
import viewreview from './views/viewreview.vue'
import viewroom from './views/viewroom.vue'
import createsheets from './views/createsheets.vue'
import createroom from './views/createroom.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/allsheets',
      name: 'allsheets',
      component: allsheets
    },
    {
      path: '/review',
      name: 'review',
      component: review
    },
    {
      path: '/room',
      name: 'room',
      component: room
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/viewsheet',
      name: 'viewsheet',
      component: viewsheet
    },
    {
      path: '/viewreview',
      name: 'viewreview',
      component: viewreview
    },
    {
      path: '/viewroom',
      name: 'viewroom',
      component: viewroom
    },
    {
      path: '/createsheets',
      name: 'createsheets',
      component: createsheets
    },    {
      path: '/createroom',
      name: 'createroom',
      component: createroom
    }
  ]
})
