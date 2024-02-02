<script setup>
</script>

<template>
  <header class="header">
    <div class="header_sitelogo"><NuxtLink to="/">My Blog</NuxtLink></div>
    <nav>
      <ul class="header_nav">
        <li><NuxtLink to="/political-science/">政治学</NuxtLink></li>
        <li><NuxtLink to="/sociology/">社会学</NuxtLink></li>
        <li><NuxtLink to="/economics/">経済学</NuxtLink></li>
        <li><NuxtLink to="/programming/">プログラミング</NuxtLink></li>
      </ul>
    </nav>
    <ul class="header_link">
      <li><a href="https://github.com/73-hana/myblog" target="_blank" rel="noreferrer noopener">GitHub</a></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 10px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  &_sitelogo {
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
  }
  &_nav,
  &_link {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    list-style: none;
  }
}
</style>