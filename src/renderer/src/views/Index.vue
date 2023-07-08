<script setup lang="ts">
import Card from '../components/Card.vue'
import { $t } from '@renderer/i18n/load'
</script>
<template>
  <Card>
    <h1>{{ $t('TITLE') }}</h1>
    <div>Card Selector</div>
  </Card>
</template>
