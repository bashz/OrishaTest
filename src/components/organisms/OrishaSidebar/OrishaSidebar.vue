<script setup lang="ts">
import OrishaSidebarItem from './OrishaSidebarItem.vue'
import type { Props as SidebarItemProps } from './OrishaSidebarItem.vue'

interface Props {
  items: Array<SidebarItemProps>
}

defineProps<Props>()
</script>

<template>
  <ul class="orisha-o-sidebar">
    <li
      class="orisha-o-sidebar__listItem"
      v-for="item in items"
      :key="item.label"
      :label="item.label"
      :level="item.level"
      :payload="item.payload"
      :append="item.append"
      :prepend="item.append"
    >
      <slot name="item" :item="item">
        <OrishaSidebarItem
          :label="item.label"
          :level="item.level"
          :payload="item.payload"
          :append="item.append"
          :prepend="item.prepend"
        />
      </slot>
    </li>
  </ul>
</template>

<style lang="scss">
@use './variables' as sidebar;
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/mixins/box' as box;

.orisha-o-sidebar {
  @include box.flex(start, start, column);
  padding: sidebar.$list-padding;
  background-color: colors.$surface;

  &__listItem {
    width: 100%;
  }
}
</style>
