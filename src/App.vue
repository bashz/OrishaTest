<script setup lang="ts">
import { RouterView } from 'vue-router'
import OrishaBreadcrumb from './components/molecules/OrishaBreadcrumb/'
import { usePathStore } from '@/stores/path'
</script>

<template>
  <header>
    <OrishaBreadcrumb :path="usePathStore().path" />
  </header>

  <RouterView />
</template>
