<template>
        <a :href="url" target="_blank">
            <button class="button" 
                    :style="{
                        width:width,
                        height: height,
                        borderRadius: radius,
                    }"
                    v-show="showButton(url)"
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
        width: [String,Number],
        height: [String,Number],
        radius: String,
    },
    methods:{
        showButton(url){
            return url.length>0?true:false
        }
    }
}
</script>

<style scoped>
    .button{
        border-radius: 5px;
        border: 0px solid white;
        margin:5px;
        background-color: var(--main-bg-color);
        box-shadow: 
            1px 2px 4px rgba(194, 194, 194, 0.952),
            -1px -3px 5px rgba(255, 255, 255, 1),
            inset 1px 2px 2px rgb(255, 255, 255),
            inset -1px -1px 1px rgb(202, 202, 202);
        transition:  all 0.2s ease 0.05s;
        font-optical-sizing: auto;
        color:rgb(71, 71, 71);
    }
    .button:hover{
        background-color: var(--main-bg-color);
        box-shadow: 
            1px 2px 4px rgba(224, 224, 224, 0.8),
            -1px -3px 5px rgba(255, 255, 255, 1),
            inset 1px 1px 2px rgb(255, 255, 255),
            inset -0.5px -0.5px 1px rgb(244,244,244);
    /* transform: translateY(-0.5px) translateX(0.4); */
    }
</style>