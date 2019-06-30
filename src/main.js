import Vue from 'vue'
import App from './App'
import Cube from 'cube-ui'
import { Validator } from 'cube-ui'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
Vue.use(VueRouter)
Vue.use(Vuex)
import util from './common/js/util'
Vue.use(util);
Vue.use(Cube)
Vue.use(Validator)
Validator.addMessage('required', 'Can not be empty');
Validator.addMessage('type', {email:'Please enter the correct email format'});
const router = new VueRouter({
  routes
})

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

