<script setup>
const route = useRoute();
</script>

<template>
  <template v-if="route.fullPath !== '/public-file/la-distinction-simplified'">
    <Header />
  </template>
  <main>
    <NuxtPage />
  </main>
</template>

<style>
body {
  margin: 0;
  background-color: ghostwhite;
}
main {
  padding: 0 20px;
}
strong {
  text-decoration: underline double yellow;
}
em {
  color: darkgray;
}
</style>