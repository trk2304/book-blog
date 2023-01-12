<template>
  <div class="hero">
    <div class="hero-text">    
      <h1 class="hero-heading">The Shelf Life</h1>
    </div>
  </div>

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
import TheSignUpComponent from '@/components/TheSignUpComponent.vue';
import TheFeaturedArticle from '@/components/TheFeaturedArticle.vue';
import ArticleList from '@/components/articles/ArticleList.vue';

export default {
  name: 'HomeView',
  components: { TheSignUpComponent, TheFeaturedArticle, ArticleList },
  data() {
    return {
      postTitle: '',
      postContent: '',
    }
  }
}
</script>

<style scoped>
.hero {
  background-size: cover;
  padding-top: 3rem;
  padding-bottom: 2rem;
  width: 95%;
  margin: 0 auto;
}

.hero-text {
  color: black;
  font-weight: bold;
  width: 60%;
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}

.hero-heading {
  font-size: 100px;
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 2px;
}

.hero-heading::before {
  content: 'I write about what I read.';
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 5px;
  font-size: 21px;
  display: block;
  margin-bottom: 1rem;
  font-family: Roboto;
}

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
