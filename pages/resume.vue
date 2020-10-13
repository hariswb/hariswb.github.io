<template>
<div>
  <Nav page="Resume"/>
  <nuxt-content :document="page" />
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