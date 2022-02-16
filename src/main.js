import Vue from "vue";
//.vueファイルはインポートすると、componentオブジェクトとなる
import App from "./App.vue";
import LikeNumber from "./LikeNumber.vue";
//trueにすると、ブラウザコンソール上に補助ログが出る。
Vue.config.productionTip = false;

//コンポーネントをグローバル登録
Vue.component("LikeNumber", LikeNumber);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
