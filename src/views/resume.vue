<template>
  <div>
    <router-link to="/">Home</router-link>
  </div>
  <div>
    <markdown-content />
  </div>
</template>

<script>
import { VueComponent} from '../markdowns/resume.md';
export default {
  components: {
    MarkdownContent: VueComponent
  }
}

</script>