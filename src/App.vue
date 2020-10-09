<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/resume">Resume</router-link> 
  </div> -->
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
