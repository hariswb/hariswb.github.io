<template>
    <ul class="nav no-print">
        <li class="back">
            <NuxtLink to="/">
                <MyButton
                    name="<"
                    height="30px" 
                    width="30px" 
                    radius="15px"
                />
            </NuxtLink> 
        </li>
        <li class="legend">
            <h5>{{page}}</h5>
        </li>
    </ul>
</template>

<script>
export default {
    name:"Nav",
    props:{
        page: String,
    },
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        text-align: left;
        padding:0px;
    }
    ul li{
        display: inline-block;
    }
    .back{
        width: 44%;
        text-align: left;
    }
    .legend{
        color:rgb(116, 116, 116);
        margin-left: center;
    }
</style>