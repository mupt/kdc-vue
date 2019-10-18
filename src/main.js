import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/axios'
import App from './App.vue'


Vue.config.productionTip = false

const Foo = { template: '<div> foo </div>' }

const routes = [
  { path: '/foo', component: Foo }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.use(router)
