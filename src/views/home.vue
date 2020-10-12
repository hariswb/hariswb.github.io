<template>
    <div class="container">
    <ul class="home">
        <li>
            <router-link to="/portfolio">
                <MyButton
                    name="Portfolio"
                    height="40px" 
                    width="120px" 
                    radius="5px"
                />
            </router-link> 
        </li>
        <li>
            <router-link to="/resume">
                 <MyButton
                    name="Resume"
                    height="40px" 
                    width="120px" 
                    radius="5px"
                />
            </router-link> 
        </li>
    </ul>
    </div>

</template>

<script>
import MyButton from "../components/button.vue"
export default {
    components: {
        MyButton,
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