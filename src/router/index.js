import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// https://alligator.io/vuejs/lazy-loading-vue-cli-3-webpack/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import(/* webpackChunkName: "hello" */ `@/components/HelloWorld`)
    }
  ]
})
