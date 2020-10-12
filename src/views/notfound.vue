<template>
    <div class="container">
        <div class="quote">
            <p>Not knowing the name of the tree,<br>
                I stood in the flood<br>
                of its sweet scent.<br>
            </p>
            <p>― Matsuo Bashō</p>
        </div>
        
        <div class="home-button">
        <router-link to="/">
        <MyButton
            name="Home"
            width="100px"
            height="40px"
            radius="20px"
        />
        </router-link>
        </div>
    </div>
</template>

<script>
import MyButton from "../components/button.vue"
export default {
    components:{
        MyButton
    }
}
</script>

<style scoped>
    .container{
        margin:20% auto;
    }
     .quote{
            margin-left:10%;
        }
    @media screen and (min-width: 600px){
        .quote{
            margin-left:30%;
        }
    }

    .home-button{
        text-align:center;
    }
</style>