<script setup lang="ts">
  import { invoke } from '@tauri-apps/api/tauri'

  const greetMsg = ref('')
  const name = ref('')

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg.value = await invoke('greet', { name: name.value })
  }
</script>

<template>
  <div class="my-4">
    <input
      v-model="name"
      class="px-1 py-2 rd-2 shadow-[0_2px_2px_rgba(0,_0,_0,_0.2)] focus:outline-0"
      placeholder="Enter a name..."
    />
    <button
      type="button"
      class="ml-2 px-4 py-2 b-1 rd-2 bg-#fff shadow-[0_2px_2px_rgba(0,_0,_0,_0.2)] hover:b-#396cd8 transition-b-0.25 active:bg-#e8e8e8 transition duration-250"
      @click="greet()"
    >
      Greet
    </button>
  </div>

  <p>{{ greetMsg }}</p>
</template>
