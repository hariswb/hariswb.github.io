<template>
  <Nav page="Portfolio"/>
  <ul class="portfolio">
    <li v-for="item in portfolios" :key="item.id">
      <div class="title" @click="handleSelect(item.id)">
        <button>
          <h3>{{item.title}}</h3>
        </button>
      </div>
      <div class="content" v-show="showContent(item.id)">
        <a :href="item.demoUrl" target="_blank" v-show="showLink(item.demoUrl)">
          <MyButton name="Live" height="30px" width="70px" radius="30px"/>
        </a>
        <a :href="item.repoUrl" target="_blank" v-show="showLink(item.repoUrl)">
          <MyButton name="Repo" height="30px" width="70px" radius="30px"/>
        </a>
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
    showContent(id){
      return id==this.selected?true:false
    },
    showLink(url){
      return url.length>0?true:false
    }
  },
}
</script>

<style scoped>
  .portfolio {
    list-style-type: none;
    margin: 0;
    margin-top: 100px;
    padding: 0;
  }
  .title button{
    border:none;
    background-color:var(--main-bg-color);
    padding: 0;
  }

  h3{
    font-size: 1.2rem;
    margin:10px 0 10px 5px;
    color: rgb(61, 61, 61);
  }
  li {
    max-width: 400px; 
  } 
  .content{
    transition: all 0.5s ease 0.2s;
    margin-left: 10px;
  }
  p{
    text-align: left;
    font-size: 1.1rem;
  }
  @media only screen and (min-width: 600px) {
    .portfolio {
      margin-left: 25%;
    }
  } 
</style>