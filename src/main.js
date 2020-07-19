import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import VueRouter from 'vue-router'

import Cv from './components/Cv.vue'
import Bio from './components/Bio.vue'
import Home from './components/Home.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/cv', component: Cv },
    { path: '/bio', component: Bio }
  ]
})

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
