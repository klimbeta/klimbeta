<script setup>

</script>

<template>
<div id="container">
    
    <div>
        <h1 id="title">Beta Route Competition</h1>
    </div>

    <div >
        <iframe class="video video-s" src="https://www.youtube.com/embed/lFlu60qs7_4?si=ldOepJA-PsWYvxtS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="background-color: red;">
        <h1>Intro</h1>
    </div>
    <div >
        <h1>Problem</h1>
    </div>
    <div>
        <h1>Solution</h1>
    </div>
</div>
</template>


<style>
.move { color: #bf6a34 }
.route { color: #f44747 }
.neuro { color: #c586c0 }
.beta { color: #569cd6 }
.envi { color: #6a9955 }
.bg { color: #1f1f1f }

#title{
    font-size: 40px;
    color: #f44747;
    padding-bottom: 1rem;
}

#container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (min-width: 1000px) {
  /* For desktop: */
    .video{
        width: 1000px;
        height: 562px;
    }
}

</style>