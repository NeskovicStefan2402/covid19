import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {store} from './store/store'; 
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
window.axios = require('axios');
import {routes} from './routes/router';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.use(VueRouter);
const router=new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
    		return savedPosition;
    	} else {
			return { x: 0, y: 0 }
		}
		
	}
});
new Vue({
  el: '#app',
  store,
  mode: 'history',
  router,
  render: h => h(App)
})
