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

<style lang="scss">
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
h1 {
  position: relative;
  padding-left: 10px;
  background-image: linear-gradient(120deg, lightgray, ghostwhite 10%);
  z-index: 1;
}
h2 {
  position: relative;
  padding-left: 10px;
  z-index: 1;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 4px;
    height: 100%;
    border-radius: 999px;
    background-color: black;
  }
}
</style>