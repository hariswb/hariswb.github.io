<template>
  <div>
    <router-link to="/">Home</router-link> 
  </div>
  <h1>portfolio</h1>
  <div>
    <ul>
      <li v-for="item in portfolios" :key="item.id">
        <h3>{{item.title}}</h3>
        <MyButton name="Demo" :url="item.demoUrl"/>
        <MyButton name="Repo" :url="item.repoUrl"/>
        <p>{{item.article}}</p>

      </li>
    </ul>
  </div>
</template>

<script>
import Portfolios from "../statics/portfolios.json"
import MyButton from "../components/button.vue"
export default {
  data(){
    return {
      portfolios:Portfolios
    }
  },
  components: {
    MyButton
  }
}
</script>