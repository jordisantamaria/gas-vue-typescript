import Vue from 'vue';
import Home from '@/pages/home/Home.vue';
import '@/assets/main.css';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(Home),
}).$mount('#app');
