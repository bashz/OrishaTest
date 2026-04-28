<script lang="ts" setup>
import { reactive } from 'vue'
import { logEvent } from 'histoire/client'
import OrishaBadge from '../OrishaBadge.vue'
import OrishaAvatar from '@/components/atoms/OrishaAvatar'

const state = reactive({
  label: 'Label',
  prepend: true,
  append: true,
})
</script>

<template>
  <Story group="atoms" title="Badge/Customisation" :layout="{ type: 'grid', width: 120 }">
    <Variant title="Avatar prepend">
      <OrishaBadge
        :label="state.label"
        :prepend="state.prepend"
        :append="state.append"
        @close="logEvent('close', $event)"
      >
        <template #prepend>
          <OrishaAvatar class="orisha-a-avatar--xs" image="/avatars/female_2.png" />
        </template>
      </OrishaBadge>
    </Variant>
    <Variant title="Icon append">
      <OrishaBadge :label="state.label" :prepend="state.prepend" :append="state.append">
        <template #append>
          <i class="ph-bold ph-number-circle-nine" @click="logEvent('Nine', $event)"></i>
        </template>
      </OrishaBadge>
    </Variant>
  </Story>
</template>
