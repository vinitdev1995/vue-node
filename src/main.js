import Vue from 'vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import routes from './routes'
import store from "./store"

Vue.component("app-dashboard", Dashboard)

const router = new VueRouter({
  routes // short for `routes: routes`
})

/*
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

*/

// OR

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");