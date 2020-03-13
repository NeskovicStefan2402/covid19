import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {store} from './store/store'; 
import axios from 'axios';
window.axios = require('axios');
import routes from './routes/router';
Vue.use(VueRouter);
new Vue({
  el: '#app',
  store,
  router:routes,
  render: h => h(App)
})
