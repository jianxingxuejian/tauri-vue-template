<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="h-screen m0 flex-center flex-col bg-#f6f6f6">
    <h1 class="text-8 font-700">Welcome to Tauri!</h1>

    <div class="flex-center">
      <a href="https://vitejs.dev" target="_blank">
        <img
          src="/vite.svg"
          class="h-35 p-6 will-change-filter transition-750 hover:filter-drop-shadow-[0_0_2em_#747bff]"
          alt="Vite logo"
        />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img
          src="/tauri.svg"
          class="h-35 p-6 will-change-filter transition-750 hover:filter-drop-shadow-[0_0_2em_#24c8db]"
          alt="Tauri logo"
        />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img
          src="@/assets/vue.svg"
          class="h-35 p-6 will-change-filter transition-750 hover:filter-drop-shadow-[0_0_2em_#249b73]"
          alt="Vue logo"
        />
      </a>
    </div>

    <p class="text-4 my-4">Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank" class="text-#646cff">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank" class="text-#646cff">
        Volar
      </a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank" class="text-#646cff">
        Tauri
      </a>
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank" class="text-#646cff">
        rust-analyzer
      </a>
    </p>

    <Greet />
  </div>
</template>
