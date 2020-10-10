<template>
  <Nav page="Portfolio"/>
  <ul>
    <li v-for="item in portfolios" :key="item.id">
      <div class="title" @click="handleSelect(item.id)">
        <h3 class="">{{item.title}}</h3>
      </div>
      <div class="content" v-show="shown(item.id)">
        <MyButton name="Demo" :url="item.demoUrl" height="30px" width="70px" radius="30px"/>
        <MyButton name="Repo" :url="item.repoUrl" height="30px" width="70px" radius="30px"/>
        <p>{{item.article}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import Portfolios from "../statics/portfolios.json"
import MyButton from "../components/button.vue"
import Nav from "../components/nav.vue"

export default {
  data(){
    return {
      portfolios:Portfolios,
      selected:0
    }
  },
  components: {
    MyButton,
    Nav
  },
  methods:{
    handleSelect(id){
      this.selected = id
    },
    shown(id){
      return id==this.selected?true:false
    }
  },
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    text-align: left;
  } 
  .content{
    margin-left: 10px;
    transition: all 0.5s ease 0.2s;
  }
</style>