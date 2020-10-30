<template>
  <div>
    <Nav page="Covid-19 Demo"/>
    <div class="container">
    <div class="notice">
        <h3>Notice: </h3>
        <p>There appears to be some problem with APIs used in this project, so the live demo is not working as expected. As i currently not having the time to use another API, so here is a video showing what this project looked like:</p>
    </div>
    <div class="video-container">
        <iframe class="responsive-iframe"  
                src="https://www.youtube.com/embed/l80eca4iPaM" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        display:flex;
        width:100%;
        height: 100%;
        flex-direction: column;
    }
    .video{
        margin:auto;
    }
    .notice{
        margin:auto;
    }
    .video-container {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .responsive-iframe {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 400px;
        border: none;
    }
</style>