import './public-path';
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';

Vue.use(Router)
let instance = null;
Vue.use(ElementUI)
Vue.config.productionTip = false

function render() {
  instance = new Vue({
    render: h => h(App),
  }).$mount('#m-slide-app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
}

export async function mount() {
  render();
}

export async function unmount() {
  instance.$destroy();
}