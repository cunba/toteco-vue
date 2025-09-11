<script setup lang="ts">
import { onMounted } from 'vue';
import { EstablishmentsRepository } from './data/repository/impl/EstablishmentsRepository';
import ApiClient, { Api } from './infrastructure/data/ApiClient';
import type { EstablishmentsApi } from './client';

onMounted(async () => {
  const res = await new EstablishmentsRepository().getAll()
  console.log(res)
})
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
