import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAnalytics from 'vue-analytics';
import x5GMaps from 'x5-gmaps'


Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-132867434-1',
  router
});

Vue.use(x5GMaps, 'AIzaSyB2CqqKETkAkhFuwwAIuP0dVPHKupJUPiQ')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
