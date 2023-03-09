<template>
  <div class="h-screen w-screen flex-col">
    <layout-header />
    <layout-main class="grow" />
  </div>
</template>

<script setup lang="ts">
  import { LayoutMain, LayoutHeader } from './components'
</script>
