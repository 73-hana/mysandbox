<script setup>
const searchInput  = ref('');
const matchedArticles = ref([]);
const haveSearched = ref(false);

async function search() {
  if(searchInput.value === '') {
    haveSearched.value = false;
  } else {
    haveSearched.value = true;
  }
  const data = await searchContent(searchInput);
  matchedArticles.value = data.value;
  console.log(matchedArticles.value)
}
</script>

<template>
  <main>
    <input v-model="searchInput" @input="search">
    <template v-if="matchedArticles.length > 0">
      <div class="article" v-for="article in matchedArticles">
        <a v-bind:href="article.id">
          <h3 class="article_title">{{ article.title }}</h3>
          <p class="article_content">{{ article.content }}</p>
        </a>
      </div>
    </template>
    <template v-else>
      <p v-if="haveSearched">記事はありません</p>
      <p v-else>文字を入力してください</p>
    </template>
  </main>
  <p><NuxtLink to="/">トップ</NuxtLink></p>
</template>

<style scoped lang="scss">
.article {
  padding: 10px 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: beige;
  & a {
    text-decoration: none;
    color: black;
    &:hover {
      color: gray;
      text-decoration: underline;
    }
  }
  &_title {
    font-size: 1.8em;
  }
  &_content {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>