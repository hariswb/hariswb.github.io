<template>
  <div>
  <Nav page="Portfolio"/>
  <div class="portfolio">
    <div v-for="item in portfolios" :key="item.id">
      <div class="title" @click="handleSelect(item.id)">
        <button><h3>{{item.title}}</h3></button>
      </div>
      <div class="content" :class="showContent(item.id)">
        <a :href="item.demoUrl" target="_blank" v-show="showLink(item.demoUrl)">
          <MyButton name="Live" height="30px" width="70px" radius="30px"/>
        </a>
        <a :href="item.repoUrl" target="_blank" v-show="showLink(item.repoUrl)">
          <MyButton name="Repo" height="30px" width="70px" radius="30px"/>
        </a>
        <p>{{item.article}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Portfolios from "../static/data/portfolios.json"

export default {
  data(){
    return {
      portfolios:Portfolios,
      selected:0
    }
  },
  methods:{
    handleSelect(id){
      this.selected = id
    },
    showContent(id){
      return id==this.selected?"show":"show"
    },
    showLink(url){
      return url.length>0?true:false
    }
  },
}
</script>

<style scoped>
  .portfolio {
    margin: 0;
    margin-top: 100px;
    padding: 0;
    display:flex;
    flex-direction: column;
    margin:auto;
    max-width: 600px;
  }
  .title button{
    border:none;
    background-color:var(--main-bg-color);
    padding: 0;
  }

  h3{
    font-size: 1.4rem;
    margin:20px 0 10px 0px;
    color: rgb(54, 54, 54);
  }

  .content{
    overflow: hidden;
  }
  .show{
    transition:all ease-in .5s;
    max-height: 600px;
    opacity: 1;
  }
  .hide{
    transition:all ease-out .5s;
    max-height:0px;
    opacity: 0;
  }
  
  p{
    text-align: justify;
    text-justify: auto;
    font-size: 1.05rem;
    color: rgb(71, 71, 71);
  }
  @media only screen and (max-width: 400px) {
    p{
      text-align: left;
    }
  } 
</style>