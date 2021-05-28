<template>
  <section id="video" class="bg-white w-full">
    <div id="carregando" class="flex justify-center py-6">
    <div class="video-sobre">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EDjdXS4lshU" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
  </div>
  </section>
</template>

<style scoped>
@media (max-width:728px) {
  .video-sobre {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
  }
  .video-sobre iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>