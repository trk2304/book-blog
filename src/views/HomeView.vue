<template>
  <div class="hero">
    <div class="hero-text">    
      <h1 class="hero-heading">Shelf Life.</h1>
    </div>
  </div>

  <TheSignUpComponent />

  <!-- Featured Article -->
  <TheFeaturedArticle class="featured-article-section" />
</template>

<script>
// @ is an alias to /src
import TheSignUpComponent from '@/components/TheSignUpComponent.vue';
import TheFeaturedArticle from '@/components/TheFeaturedArticle.vue';


export default {
  name: 'HomeView',
  components: { TheSignUpComponent, TheFeaturedArticle },
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
  padding-bottom: 3rem;
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
  font-size: 62px;
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 2px;
}

.hero-heading::before {
  content: 'I write about what I read.';
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 5px;
  font-size: 28px;
  display: block;
  margin-bottom: 1rem;
  font-family: Roboto;
}

.featured-article-section {
  margin-top: 5rem;
}
</style>
