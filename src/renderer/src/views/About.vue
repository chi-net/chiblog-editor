<script setup lang="ts">
import Card from '../components/Card.vue'
import { $t } from '@renderer/i18n/load'
import Versions from '@renderer/components/Versions.vue'
</script>
<template>
  <Card>
    <h1>{{ $t('ABOUT') }}</h1>
    <h2>chiblog Editor</h2>
    <h3>Alpha Edition</h3>
    <h3>Thanks to Vue + Vite + Electron!</h3>
    {{ $t('VERSION_INFO') }}
    <Versions></Versions>
    <hr />
    <h3>{{ $t('COPYRIGHT_STATEMENT') }}</h3>
  </Card>
</template>
