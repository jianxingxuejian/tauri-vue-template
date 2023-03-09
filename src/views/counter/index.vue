<template>
  <div class="flex-center">
    <span class="text-6">{{ counterStore.count }}</span>
    <button
      class="h-10 w-10 ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      @click="counterStore.count--"
    >
      -
    </button>
    <button
      class="h-10 w-10 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      @click="counterStore.count++"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/stores'
  const counterStore = useCounterStore()
</script>
