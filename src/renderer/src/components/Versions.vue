<script setup lang="ts">
import { reactive, version } from 'vue'
// import { version } from 'vite'

const versions = reactive({ ...window.electron.process.versions })
</script>

<template>
  <ul class="versions">
    <li class="electron-version">Electron v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
    <li class="node-version">Node v{{ versions.node }}</li>
    <li class="v8-version">V8 v{{ versions.v8 }}</li>
    <li class="vue-version">Vue v{{ version }}</li>
    <li class="vite-version">Vite v4.3.9</li>
  </ul>
</template>
