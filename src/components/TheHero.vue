<template>
    <div class="hero">
        <div class="hero-text">    
        <h1 class="hero-heading">The Shelf Life</h1>
        </div>
  </div>
</template>

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
</style>