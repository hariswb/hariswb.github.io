<template>
  <Nav page="Resume"/>
  <div>
    <markdown-content />
  </div>
</template>

<script>
import { VueComponent} from '../markdowns/resume.md';
import Nav from "../components/nav.vue"

export default {
  components: {
    MarkdownContent: VueComponent,
    Nav
  }
}

</script>