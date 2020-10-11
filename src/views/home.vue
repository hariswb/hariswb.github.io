<template>
    <div class="container">
    <ul class="home">
        <li>
            <router-link to="/portfolio"><button>Portfolio</button></router-link> 
        </li>
        <li>
            <router-link to="/resume"><button>Resume</button></router-link> 
        </li>
    </ul>
    </div>

</template>

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
    button{
        border: 0.1px solid black;
        border-radius: 15px;
        height: 30px;
        width: 100px;
        margin: 10px;
    }
</style>