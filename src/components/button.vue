<template>
        <a :href="url" target="_blank">
            <button>
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
    }
}
</script>