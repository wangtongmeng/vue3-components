import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Icon from '@tm/components/icon';
import '@tm/theme-chalk/src/index.scss';

const plugins = [Icon];
const app = createApp(App);

plugins.forEach(plugin => {
  app.use(plugin);
}); // 将组件注册成了全局组件

app.mount('#app');
