<script lang="ts" setup>
import { reactive } from 'vue'
import OrishaAvatar from '../OrishaAvatar.vue'

const state = reactive({
  image: '/avatars/female_2.png',
  title: 'Female 2',
})
</script>

<template>
  <Story group="atoms" title="Avatar" :layout="{ type: 'grid', width: 120 }">
    <Variant title="Placeholder xs">
      <OrishaAvatar class="orisha-a-avatar--xs" />
    </Variant>
    <Variant title="Placeholder sm">
      <OrishaAvatar class="orisha-a-avatar--sm" />
    </Variant>
    <Variant title="Placeholder md">
      <OrishaAvatar class="orisha-a-avatar--md" />
    </Variant>
    <Variant title="Placeholder default">
      <OrishaAvatar />
    </Variant>
    <Variant title="Placeholder lg">
      <OrishaAvatar class="orisha-a-avatar--lg" />
    </Variant>
    <Variant title="Placeholder xl">
      <OrishaAvatar class="orisha-a-avatar--xl" />
    </Variant>
    <Variant title="Placeholder xxl">
      <OrishaAvatar class="orisha-a-avatar--xxl" />
    </Variant>
    <Variant title="Image xs">
      <OrishaAvatar class="orisha-a-avatar--xs" :image="state.image" />
    </Variant>
    <Variant title="Image sm">
      <OrishaAvatar class="orisha-a-avatar--sm" :image="state.image" />
    </Variant>
    <Variant title="Image md">
      <OrishaAvatar class="orisha-a-avatar--md" :image="state.image" />
    </Variant>
    <Variant title="Image default" :image="state.image">
      <OrishaAvatar :image="state.image" :title="state.title" />
    </Variant>
    <Variant title="Image lg">
      <OrishaAvatar class="orisha-a-avatar--lg" :image="state.image" />
    </Variant>
    <Variant title="Image xl">
      <OrishaAvatar class="orisha-a-avatar--xl" :image="state.image" />
    </Variant>
    <Variant title="Image xxl">
      <OrishaAvatar class="orisha-a-avatar--xxl" :image="state.image" />
    </Variant>
    <Variant title="Headband">
      <OrishaAvatar class="orisha-a-avatar--headband" :image="state.image" :title="state.title" />
    </Variant>
  </Story>
</template>
