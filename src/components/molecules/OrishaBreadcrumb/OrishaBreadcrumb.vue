<script setup lang="ts">
interface Props {
  path: Array<string>
}

const props = defineProps<Props>()

function activeItemClass(part: string): string {
  if (props.path && part === props.path[props.path.length - 1])
    return 'orisha-m-breadcrumb__item--last'
  return ''
}
</script>

<template>
  <nav class="orisha-m-breadcrumb">
    <div
      v-if="path && path.length"
      class="orisha-m-breadcrumb__item orisha-m-breadcrumb__item--first"
    >
      <div class="orisha-m-breadcrumb__text">{{ path[0] }}</div>
    </div>
    <div
      v-for="part in path && path.slice(1)"
      :key="part"
      class="orisha-m-breadcrumb__item"
      :class="activeItemClass(part)"
    >
      <i class="ph-light ph-caret-right" />
      <div class="orisha-m-breadcrumb__text">{{ part }}</div>
    </div>
  </nav>
</template>

<style lang="scss">
@use './variables' as breadcrumb;
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/mixins/text' as text;
@use '@/assets/scss/mixins/box' as box;

.orisha-m-breadcrumb {
  @include box.flex;
  @include text.body-xxs(500);
  background-color: colors.$component-bg;
  height: breadcrumb.$height;
  padding: 0 8px;
  color: colors.$text-secondary;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: colors.$stroke-primary;
  justify-content: flex-start;

  &__item {
    @include box.flex;
  }

  &__text {
    padding: 0 4px;
  }

  &__item--last {
    color: colors.$primary;
  }
}
</style>
