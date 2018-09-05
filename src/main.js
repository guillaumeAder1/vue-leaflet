import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import "leaflet/dist/leaflet.css";


Vue.use(ElementUI);



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
