import { defineConfig } from 'vite';
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [DefineOptions()] // // vitepress内置了vue插件，会和配置插件自动合并
});
