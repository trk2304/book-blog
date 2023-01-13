<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <a href="https://www.linkedin.com/in/titus-kilpatrick-a5207b188/" target="_blank">LinkedIn</a>
  </nav>
  <router-view/>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  mounted() {
    AOS.init();
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 95%;
  margin: 0 auto;
}

nav a:first-child {
  border-right: none;
}

nav a:last-child {
  border-left: none;
}

nav a {
  border-top: none;
  border-bottom: none;
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 1rem 3rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: 250ms ease-in-out all;
}

nav a:hover {
  background-color: lightblue;
  color: white;
}

nav a.router-link-exact-active {
  color: white;
  background-color: lightblue;
}
</style>
