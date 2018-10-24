import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
import util from './common/js/util'
Vue.use(util);

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

require('./assets/theme/theme-custom/index.css');
require('./assets/css/custom.scss');


new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

if(typeof winSetInterval=='undefined'){
    window.winSetInterval=function(){};
}
window.setInterval("winSetInterval()", 100);

