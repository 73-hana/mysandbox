<script setup>
const route = useRoute();
console.log(route.fullPath);
</script>

<template>
  <template v-if="route.fullPath !== '/sociology/book/la-distinction-simplified'">
    <Header />
  </template>
  <main>
    <NuxtPage />
  </main>
</template>

<style>
body {
  margin: 0;
}
main {
  padding: 0 20px;
}
</style>