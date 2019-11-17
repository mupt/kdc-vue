import Vue from 'vue/dist/vue.js';
import './plugins/axios'
import App from './App.vue'
import VueRouter from 'vue-router'

import Cv from './components/Cv.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const Home = {
  template: '<div> Home </div>'
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/cv', component: Cv }
  ]
})

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
