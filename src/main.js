import Vue from "vue";
import Message from "@/components/message/message";
import App from "./App";
import store from './store'
import VConsole from "vconsole";
import i18n from '@/common/lang';

Vue.prototype.$message = Message;

Vue.config.productionTip = false;

App.mpType = "app";

// new VConsole();

const app = new Vue({
  i18n,
  store,
  ...App,
});
app.$mount();

