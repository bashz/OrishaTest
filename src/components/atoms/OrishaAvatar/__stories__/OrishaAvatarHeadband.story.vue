<script lang="ts" setup>
import { reactive } from 'vue'
import OrishaAvatar from '../OrishaAvatar.vue'

const state = reactive({
  image: '/avatars/female_2.png',
  title: 'Female 2',
})
</script>

<template>
  <Story group="atoms" title="Avatar/Headband">
    <Variant title="Headband">
      <OrishaAvatar class="orisha-a-avatar--headband" :image="state.image" :title="state.title" />
    </Variant>
  </Story>
</template>
