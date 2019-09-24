import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AuthGuard from './auth_guard'
import Login from '@/components/Auth/Login'
import Ad from '@/components/Ads/Ad'
import NewAd from '@/components/Ads/NewAd'
import Orders from '@/components/User/Orders'
import Registrations from '@/components/Auth/Registrations'
import AdList from '@/components/Ads/AdList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registrations',
      name: 'registrations',
      component: Registrations
    },
    {
      path: '/ad/:id',
      name: 'ad',
      props: true,
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: AdList,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd,
      beforeEnter: AuthGuard
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
