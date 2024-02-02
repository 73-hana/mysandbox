<template>
  <h1>社会学</h1>
  <section>
    <h2>社会学の基礎を学ぶ</h2>
    <p>公務員試験の範囲に沿って、社会学の基礎を勉強します。</p>
    <ContentList path="/sociology/article/basic">
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
  <section>
    <h2>社会学の本を読む</h2>
    <p>古典から現代の本まで、気になるものを読む</p>
    <ContentList path="/sociology/book">
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