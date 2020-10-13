<template>
  <div class="container">
    <ul class="home">
        <li v-for="link in links" :key="link.name">
            <NuxtLink  :to="link.path">
                <MyButton
                    :name="link.name"
                    height="40px" 
                    width="120px" 
                    radius="20px"
                />
            </NuxtLink>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            links:[]
        }
    },
    created() {
        this.$router.options.routes
            .forEach(route => {
                if(route.path!=="/"){
                    this.links.push({
                    name:route.name.toUpperCase(),
                    path:route.path
                })
                }
            });    
    }
}
</script>

<style scoped>
    .container{
        margin:40vh auto;
    }
    .home{
        list-style: none;
        display: inline;
        text-align: center;
        padding-top: 100px;
    }
    
</style>