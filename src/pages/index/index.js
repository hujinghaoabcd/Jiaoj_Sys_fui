// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./index.vue";
import axios from 'axios';
import router from "./router";
import store from "./Vuex/store";
Vue.prototype.$ajax=axios;


/* eslint-disable no-new */
var vm = new Vue({
  el: "#app",
  router,
  store, //使用store
  template: "<App/>",
  components: { App }
});
console.log("首页渲染");
