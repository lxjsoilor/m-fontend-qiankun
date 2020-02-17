import './public-path';
import Vue from 'vue'
import App from './App.vue'
let instance = null;
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

function render() {
  instance = new Vue({
    render: h => h(App),
  }).$mount('#m-header-app');
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