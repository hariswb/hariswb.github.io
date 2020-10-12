<template>
    <button class="button" 
        :style="{
        width:width,
        height: height,
         borderRadius: radius,
        }"
        >
        <span>{{name}}</span>
     </button>
</template>

<script>
export default {
    name:"MyButton",
    props:{
        name: String,
        width: [String,Number],
        height: [String,Number],
        radius: String,
    },
}
</script>

<style scoped>
    .button{
        border-radius: 5px;
        border: 0px solid white;
        margin:5px;
        background-color: var(--main-bg-color);
        box-shadow: 
            -1px -2px 4px rgb(255, 255, 255),
            1px 2px 4px rgb(209, 209, 209);
        transition:  all 0.2s ease 0.05s;
        font-optical-sizing: auto;
        color:rgb(107, 107, 107);
        font-size: 0.9rem;
        font-weight: 600;
        transform: scale(1)
    }
    .button:hover{
        box-shadow: 
            -1px -2px 4px rgb(255, 255, 255),
            1px 2px 4px rgb(209, 209, 209),
            inset -1px -2px 1px rgb(231, 231, 231),
            inset 1px 2px 1px rgb(255, 255, 255),
            inset -2px -3px 6px rgb(255, 255, 255),
            inset 2px 2px 3px rgb(238, 238, 238);
        transform: scale(0.95);
        color:rgb(43, 43, 43);
    }
    
</style>