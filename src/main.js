import Vue from "vue";
//.vueファイルはインポートすると、componentオブジェクトとなる
import App from "./App.vue";

//trueにすると、ブラウザコンソール上に補助ログが出る。
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
