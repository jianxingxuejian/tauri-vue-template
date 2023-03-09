<template>
  <div class="flex-center">
    <icon-ic:sharp-remove-circle-outline
      class="text-12 text-gray-400 hover:text-gray-700 transition-colors duration-300 cursor-pointer"
      @click="counterStore.count--"
    />
    <span class="text-6 mx-4 select-none">{{ counterStore.count }}</span>
    <icon-ic:sharp-add-circle-outline
      class="text-12 text-gray-400 hover:text-gray-700 transition-colors duration-300 cursor-pointer"
      @click="counterStore.count++"
    />
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/stores'
  const counterStore = useCounterStore()
</script>
