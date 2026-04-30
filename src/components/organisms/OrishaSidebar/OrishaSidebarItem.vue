<script setup lang="ts">
export interface Props {
  level: number
  label: string
  payload?: unknwon
  prepend?: boolean
  append?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="orisha-o-sidebar__item" :class="`orisha-o-sidebar__item--level${level}`">
    <div v-if="prepend" class="orisha-o-sidebar__itemPrepend">
      <slot name="prepend" :payload="payload">
        <i class="ph-light ph-circle" />
      </slot>
    </div>
    <div class="orisha-o-sidebar__itemLabel">{{ label }}</div>
    <div v-if="append" class="orisha-o-sidebar__itemAppend">
      <slot name="append" :payload="payload">
        <i class="ph-light ph-circle" />
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
@use './variables' as sidebar;
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/variables/corners' as corners;
@use '@/assets/scss/mixins/text' as text;
@use '@/assets/scss/mixins/box' as box;

.orisha-o-sidebar__item {
  @include box.flex;
  display: inline-flex;
  width: 100%;
  height: sidebar.$item-height;
  padding: sidebar.$item-padding;
  border-radius: corners.$default;
  margin: sidebar.$item-margin;

  &Label,
  &Append,
  &Prepend {
    padding: sidebar.$item-padding;
  }

  &Label {
    flex-grow: 1;
  }

  &:hover {
    background-color: colors.get('neutral', 'grey', 200);
  }

  &--level1 {
    .orisha-o-sidebar__itemLabel {
      @include text.overline;
      color: colors.get('neutral', 'grey', 500);
    }
  }

  &--level2 {
    .orisha-o-sidebar__itemLabel {
      @include text.overline;
      color: colors.get('neutral', 'grey', 500);
    }
  }

  &--level3 {
    .orisha-o-sidebar__itemLabel {
      @include text.body-md(500);
      color: colors.$text-primary;
    }
  }
}
</style>
