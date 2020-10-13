<template>
  <div class="container">
    <ul class="home">
        <li>
            <NuxtLink to="/portfolio">
                <MyButton
                    name="Portfolio"
                    height="40px" 
                    width="120px" 
                    radius="20px"
                />
            </NuxtLink> 
        </li>
        <li>
            <NuxtLink to="/resume">
                 <MyButton
                    name="Resume"
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