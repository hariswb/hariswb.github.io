<template>
  <div>
  <Nav page="Portfolio"/>
  <ul class="portfolio">
    <li v-for="item in portfolios" :key="item.id">
      <div class="title" @click="handleSelect(item.id)">
        <button><h3>{{item.title}}</h3></button>
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
    color: rgb(54, 54, 54);
  }
  li{
    max-width: 400px; 
  } 
  .content{
    padding: 15px;
    /* background-color: aquamarine; */
    /* border: 0px solid black; */
    /* border-radius: 10px 10px 10px 10px;
    box-shadow: 
            inset 1px 2px 3px rgba(0, 0, 0, 0.055),
            inset -1px -2px 3px rgba(255, 255, 255, 0.856); */
  }

  p{
    text-align: left;
    font-size: 1rem;
    color: rgb(71, 71, 71);
  }
  @media only screen and (min-width: 600px) {
    .portfolio {
      margin-left: 25%;
    }
  } 
</style>