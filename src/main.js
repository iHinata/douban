// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'normalize.css'
import 'iview/dist/styles/iview.css'   
import resource from 'vue-resource'
import store from './vuex/index.js'
import Loading from './components/loading/index.js'

Vue.use(Loading)
Vue.use(resource)
Vue.use(iView)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
