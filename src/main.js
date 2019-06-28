
import Vue from 'vue'
import App from './App.vue'
import { Layout } from 'bootstrap-vue/es/components';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Layout);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')