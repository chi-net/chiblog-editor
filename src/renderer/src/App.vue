<script setup lang="ts">
// import Versions from './components/Versions.vue'
import Card from './components/Card.vue'
// @ts-ignore fxxk you micro$oft!
import { $t, $lang } from './i18n/load'
document.title = 'chiblog Editor'
</script>

<template>
  <!-- <Versions></Versions> -->
  <Card>
    <h2>
      {{ $t('LANG') }}:
      <button @click="$lang('zh')">简体中文</button>
      <button @click="$lang('en')">English</button>
    </h2>
    <h1>{{ $t('TITLE') }}</h1>
    <div>Edit chiblog configuration.</div>
  </Card>
</template>

<style lang="scss">
@import './assets/styles/styles.scss';
</style>
