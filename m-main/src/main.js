import './public-path';
import Vue from 'vue'
import App from './App.vue'
import router from './router';
let instance = null;
Vue.config.productionTip = false

function render() {
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#m-main-app');
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