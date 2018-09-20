import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/test.vue'
import Route1 from './components/route1.vue'
import Route2 from './components/route2.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   path: '/route1', component: Route1,
   path: '/route2', component: Route2 
});
new Vue({
  el: '#root',
  router
});
