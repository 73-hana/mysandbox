<template>
  <h1>プログラミング</h1>
  <section>
    <h2>JSの本を読む</h2>
    <p>技術書を中心に読む。</p>
    <ContentList path="/programming/js/book">
      <template #default="{ list }">
        <ul>
          <li v-for="article in list" v-bind:key="article._path">
            <NuxtLink v-bind:to="article._path">{{ article.title }}</NuxtLink>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>準備中</p>
      </template>
    </ContentList>
  </section>
  <p>
    <NuxtLink to="/">トップ</NuxtLink>
  </p>
</template>