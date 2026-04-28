<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from '@/router'
import OrishaBreadcrumb from './components/molecules/OrishaBreadcrumb/'
</script>

<template>
  <header>
    <OrishaBreadcrumb :path="router.currentRoute.value.meta.path" />
  </header>

  <RouterView />
</template>
