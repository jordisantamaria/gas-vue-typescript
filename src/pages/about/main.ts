import Vue from "vue";
import About from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(About)
}).$mount("#app");
