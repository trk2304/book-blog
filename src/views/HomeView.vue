<template>
  
  <!-- The Hero Component -->
  <TheHero />

  <TheSignUpComponent />

  <!-- Featured Article -->
  <TheFeaturedArticle class="featured-article-section" />

  <span class="section-divider"></span>

  <h2 class="heading-2">Recent Posts</h2>
  <!-- Display all articles -->
  <ArticleList />
  
</template>

<script>
// @ is an alias to /src
import TheHero from '@/components/TheHero.vue';
import TheSignUpComponent from '@/components/TheSignUpComponent.vue';
import TheFeaturedArticle from '@/components/TheFeaturedArticle.vue';
import ArticleList from '@/components/articles/ArticleList.vue';

export default {
  name: 'HomeView',
  components: { TheHero, TheSignUpComponent, TheFeaturedArticle, ArticleList },
  data() {
    return {
      postTitle: '',
      postContent: '',
    }
  }
}
</script>

<style scoped>
.featured-article-section {
  margin-top: 5rem;
}

.section-divider {
  width: 95%;
  border: 1px soild black;
  height: 1px;
  background-color: black;
  display: block;
  margin: 4rem auto;
}

.heading-2 {
  font-family: 'Times New Roman', Serif;
  font-size: 36px;
  letter-spacing: 1px;
}
</style>
