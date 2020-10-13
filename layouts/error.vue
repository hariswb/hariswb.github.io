<template>
    <div class="error-page">
        <div class="quote">
            <p>Not knowing the name of the tree,<br>
                I stood in the flood<br>
                of its sweet scent.<br>
            </p>
            <p class="name">― Matsuo Bashō</p>
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
export default {
    props: ['error'],
    layout: 'default'
}
</script>

<style scoped>
    .error-page{
        margin-top:200px;
    }
    .quote{
        margin-left:10%;
        max-width: 400px;
    }
    .name{
        text-align: right;
    }
    .home-button{
        text-align:center;
    }
    @media screen and (min-width: 600px){
        .quote{
            margin-left:25%;
        }
    }
</style>