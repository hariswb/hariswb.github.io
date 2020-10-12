<template>
    <ul class="nav no-print">
        <li class="back">
            <router-link to="/">
                <MyButton
                    name="<"
                    height="30px" 
                    width="30px" 
                    radius="15px"
                />
            </router-link> 
        </li>
        <li class="legend">
            <h5>{{page}}</h5>
        </li>
    </ul>
</template>

<script>
import MyButton from "../components/button.vue"
export default {
    name:"Nav",
    props:{
        page: String,
    },
    components:{
        MyButton
    }
}
</script>

<style scoped>
    .nav{
        list-style-type: none;
        text-align: left;
        padding-inline-start: 0px;
    }
    .nav li{
        display: inline-block;
    }
    .back{
        width: 46%;
        text-align: start;
    }
    .legend{
        width: 54%;
        color:rgb(116, 116, 116);
        margin-left: center;
    }
    .button{
        height: 20px;
        width: 30px;
        background-color:var(--main-bg-color);
        border: 0px solid black;
        border-radius: 3px;
        padding:3x; 
        margin:auto;
    }
    .img-button{
        max-height: 70%;
        max-width: 60px;
        margin:auto;
    }
</style>