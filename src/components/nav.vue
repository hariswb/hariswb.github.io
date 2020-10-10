<template>
    <ul class="nav">
        <li>
            <router-link to="/">
                <button>
                    Back
                </button>
            </router-link> 
        </li>
        <li class="legend">
            <h3 >{{page}}</h3>
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
    .nav{
        list-style-type: none;
        text-align: left;
        padding-inline-start: 0px;
        border: 1px solid black;
    }
    .nav li{
        display: inline-block;
    }
    .legend{
        margin-left: 25%;
    }
</style>