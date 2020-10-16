<template>
<div>
  <Nav page="Resume"/>
  <div class="md-content">
    <nuxt-content :document="page" />
  </div>
</div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('resume').fetch()
    return {
      page
    }
  }
}
</script>

<style scoped>
.md-content{
  /* background-color: aquamarine; */
  font-size:0.9rem;
}
.md-content table{
  background-color: blue;
}
</style>>