<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { createNamespace } from '@tm/utils/create';
import { computed, CSSProperties } from 'vue';
import { iconProps } from './icon';
const bem = createNamespace('icon');
console.log('bem', bem.b());

// 定义组件的名字
defineOptions({
  name: 'TIcon'
});

const props = defineProps(iconProps);

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) {
    return {};
  }
  console.log('props', props);

  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {})
  };
});
</script>
