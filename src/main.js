import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import BuyModalComponent from '@/components/Shared/BayModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-bay-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCOgD93xy0dgr4p4xtzGZRGn9YOm0rkArU',
      authDomain: 'itc-ads-2094d.firebaseapp.com',
      databaseURL: 'https://itc-ads-2094d.firebaseio.com',
      projectId: 'itc-ads-2094d',
      storageBucket: 'itc-ads-2094d.appspot.com',
      messagingSenderId: '695988488114'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
