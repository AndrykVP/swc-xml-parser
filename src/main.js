// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import Vuex from 'vuex'
import Store from './store/main'

import 'buefy/dist/buefy.css'

export default function (Vue, { router, head, isClient, appOptions }) {
   // Set default layout as a global component
   Vue.component('Layout', DefaultLayout)

   // Add Vuex Store
   Vue.use(Vuex)
   appOptions.store = new Vuex.Store(Store)
   
   // Push Fontawesome Import
   head.link.push({
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
   })

   // Add Buefy IconPack to Vue
   Vue.use(Buefy, {
      defaultIconPack: 'fas' // Font Awesome Solid
   })
}
