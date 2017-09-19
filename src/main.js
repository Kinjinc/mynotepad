// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import VueToast from 'vue2-toast'
import 'vue2-toast/lib/toast.css'
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  render:h=>h(App)
}).$mount('#app')
