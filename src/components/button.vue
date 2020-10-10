<template>
        <a :href="url" target="_blank">
            <button class="button" 
                    :style="{
                        width:width,
                        height: height,
                        borderRadius: radius
                    }"
                >
                    {{name}}
            </button>
        </a>
</template>

<script>
export default {
    name:"MyButton",
    props:{
        name: String,
        url: String,
        width: String,
        height: String,
        radius: String,
    }
}
</script>

<style scoped>
    .button{
        border-radius: 5px;
        border: 0px solid white;
        margin:5px;
        background-color: white;
        box-shadow: 
            1px 3px 7px rgba(87, 87, 87, 0.1);
        transition:  all 0.2s ease 0.05s;
    }
    .button:hover{
        background-color: rgb(0, 204, 255);
        box-shadow: 
            1px 6px 7px rgba(87, 87, 87, 0.1);
        transform: translateY(-2px);
    }
</style>