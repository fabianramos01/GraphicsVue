import Vue from 'vue'
import App from './App.vue'
import ApexCharts from 'apexcharts'
import Vuetify from 'vuetify';
import ECharts from 'vue-echarts';

Vue.config.productionTip = false;

new Vue({
  ECharts,
  Vuetify,
  ApexCharts,
  render: h => h(App),
}).$mount('#app');
