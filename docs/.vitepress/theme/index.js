import DefaultTheme from 'vitepress/theme';

import TIcon from '@tm/components/icon';
import '@tm/theme-chalk/src/index.scss';

console.log(TIcon);
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(TIcon); // 在vitepress中 注册全局组件
  }
};
