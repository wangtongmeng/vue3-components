// 整合组件并导出组件
import { withInstall } from '@tm/utils/with-install';
import _Icon from './src/icon.vue';

const Icon = withInstall(_Icon); // 生成带有install方法的组件

export default Icon; // 可以通过app.use来使用 也可以通过 import方式单独使用

export * from './src/icon';

// 这里添加的类型 可以在模版中被解析 配合着volar插件
declare module 'vue' {
  export interface GlobalComponents {
    // 接口会自动合并
    TIcon: typeof Icon;
  }
}
