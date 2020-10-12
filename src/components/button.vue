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
            /* Top Left */
            -0.5px -0.5px 1px rgb(255, 255, 255),
            inset 1px 1px 2px rgb(255, 255, 255),
            inset 2px 5px 4px rgba(0, 0, 0, 0),
            /* Bottom Right */
            0.5px 0.5px 1px rgba(0, 0, 0, 0.089),
            inset -1px -1px 2px rgba(0, 0, 0, 0.068),
            inset -2px -5px 4px rgba(255, 255, 255, 0);
        transition:  all 0.2s ease 0.05s;
        font-optical-sizing: auto;
        color:rgb(107, 107, 107);
        font-size: 0.9rem;
        font-weight: 600;
        transform: scale(1)
    }
    .button:hover{
        box-shadow: 
            /* Top Left */
            -1px -1px 1px rgb(255, 255, 255),
            inset 1px 2px 2px rgb(255, 255, 255),
            inset 2px 5px 4px rgba(0, 0, 0, 0.055),
            /* Bottom Right */
            1px 1px 1px rgba(0, 0, 0, 0.089),
            inset -1px -2px 2px rgba(0, 0, 0, 0.068),
            inset -2px -5px 4px rgba(255, 255, 255, 0.658);
           
        transform: scale(0.97);
        color:rgb(71, 71, 71);
    }
            /* -0.5px -0.5px 1px rgb(255, 255, 255),
            inset 2px 4px 2px rgb(255, 255, 255),
            inset 2px 5px 4px rgba(0, 0, 0, 0),
            0.5px 0.5px 1px rgba(0, 0, 0, 0.089),
            inset -2px -4px 2px rgba(0, 0, 0, 0.068),
            inset -2px -5px 4px rgba(255, 255, 255, 0); */
</style>