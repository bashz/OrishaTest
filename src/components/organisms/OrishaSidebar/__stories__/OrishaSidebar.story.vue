<script lang="ts" setup>
import { reactive } from 'vue'
import OrishaSidebar from '../OrishaSidebar.vue'
import OrishaSidebarItem from '../OrishaSidebarItem.vue'
import OrishaCheckbox from '@/components/atoms/OrishaCheckbox/OrishaCheckbox.vue'

const state = reactive({
  items: [
    {
      level: 1,
      label: 'First Level no addons',
      payload: { variant: 'no addons' },
    },
    {
      level: 2,
      label: 'Second Level prepend',
      payload: { variant: 'prepend' },
      prepend: true,
    },
    {
      level: 3,
      label: 'Third Level append',
      payload: { variant: 'append' },
      append: true,
    },
    {
      level: 3,
      label: 'Third Level both addons',
      payload: { variant: 'both addons' },
      append: true,
      prepend: true,
    },
  ],
})
</script>

<template>
  <Story group="organisms" title="Sidebar">
    <Variant title="Simple addons">
      <OrishaSidebar :items="state.items" style="width: 340px" />
    </Variant>
    <Variant title="custom addons">
      <OrishaSidebar :items="state.items" style="width: 340px">
        <template #item="props">
          <OrishaSidebarItem
            :label="props.item.label"
            :level="props.item.level"
            :payload="props.item.payload"
            :append="props.item.append"
            :prepend="props.item.prepend"
          >
            <template #prepend>
              <OrishaCheckbox />
            </template>
            <template #append>
              <OrishaCheckbox />
            </template> </OrishaSidebarItem
        ></template>
      </OrishaSidebar>
    </Variant>
  </Story>
</template>
