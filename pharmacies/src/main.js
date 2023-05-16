import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery';
window.$ = window.jQuery= jQuery;
import 'popper.js';
//import 'bootstrap';
import './assets/app.scss';
import store from './store'
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

//import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)

createApp(App).use(store).use(router).mount('#app')



