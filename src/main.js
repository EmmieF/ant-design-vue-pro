import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Layout, Icon, Drawer } from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
