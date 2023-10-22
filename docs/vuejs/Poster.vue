<script setup>

</script>

<template>
    <div id="container">

        <div>
            <h1 id="title">🔺 Beta Route Competition 🔺</h1>
        </div>

        <div id="video_container">
            <iframe class="video video-s" src="https://www.youtube.com/embed/lFlu60qs7_4?si=ldOepJA-PsWYvxtS"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <div class="background-color: red;">
            <h1>Intro</h1>
        </div>
        <div>
            <h1>Problem</h1>
        </div>
        <div>
            <h1>Solution</h1>
        </div>


        <a class="button" href="https://klimbeta.github.io/klimbeta/betacomp/BetaRoute.html">

            Click here to find out all the details about Beta Route Competition here

        </a>
    </div>
</template>


<style scoped>

/* For Phone */

#title {
    font-size: 30px;
    color: #f44747;
    padding: 1rem;
    margin: 1rem;
    font-weight: bold;
    line-height: normal;

}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.button {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #f44747;
    border-radius: 25px;

}

#video_container{
    background-color: #f44747;
    border-radius: 25px;
    padding: 1rem;
}

.video-s{
    width: 360px;
    height: 202px;
    border-radius: 10px;
}


/* For Tablet */

/* For desktop: */
@media only screen and (min-width: 1000px) {

   
    .video {
        width: 900px;
        height: 506px;
        border-radius: 25px;
    }

    #title {
        font-size: 50px;
        font-weight: bold;
        padding: 1rem;
        margin: 1rem;

    }
}
</style>