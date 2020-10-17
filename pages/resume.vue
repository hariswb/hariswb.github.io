<template>
<div class="resume-container">
  <Nav page="Resume"/>
  <div class="header">
    <div class="left"><h3>{{page.name}}</h3></div>
    <div class="right">
      <ul class="contacts"><li v-for="item in page.details">{{item}}</li></ul>
    </div>
  </div>
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

<style>
.resume-container{
  --color-0: rgb(3, 25, 58);
  --color-1: rgb(8, 38, 83);
  --color-2: rgb(22, 56, 107);
  --color-3: rgb(54, 54, 54);
}
.header{
  display: flex;
  width:100%;
  flex-direction: row;
  font-family: 'Heebo';
}
.left{
  width:50%;
  text-align: left;
}
.left h3{
  padding: 0px;
  margin: 0px auto 0px auto;
  letter-spacing: 1px;
  color: var(--color-0);
  font-size: 1.6rem;
}
.right{
  width:50%;
  text-align: right;
}
.right ul{
  margin: 0px auto 0px auto;
}
.contacts li{
  list-style: none;
  font-size: .8rem;
}

/* Nuxt Content Style */
.nuxt-content{
  font-size:0.9rem;
  line-height: 1.3;
  color:var(--color-3);
}
.nuxt-content table{
  width: 100%;
  border-spacing: 0px;
  margin:0px;
}
.nuxt-content td{
  width: 33%;
  padding:0px;
  vertical-align: top;
}
.nuxt-content h3{
  letter-spacing: .8px;
  color: var(--color-1);

}
.nuxt-content h4{
  margin-bottom:0px;
  font-size: .95rem;
  color: var(--color-2);
}
.nuxt-content ul{
  margin-top:5px;
}
.nuxt-content p{
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>>