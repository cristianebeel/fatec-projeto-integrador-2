<template>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS </title>
    <script src="https://use.fontawesome.com/b658ad5274.js"></script>
    <link rel="stylesheet" href="css/output.css">
</head>

<body class="bg-white">
<header class="bg-white shadow-lg  border-b-2 border-gray-400 ">
</header>


<div class="carousel">
    <div class="carousel-inner">
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
       <div class="carousel-item absolute opacity-0 " style="height:65vh;">
            <img src="~/assets/img/boys2.jpg">
        </div>
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0 " style="height:65vh;">
            <img src="~/assets/img/kids2.jpg">
        </div>
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:65vh;">
        <img src="~/assets/img/jeans.jpg">
        </div>

        <label for="carousel-3" class="carousel-control prev control-1">‹</label>
        <label for="carousel-2" class="carousel-control next control-1">›</label>
        <label for="carousel-1" class="carousel-control prev control-2">‹</label>
        <label for="carousel-3" class="carousel-control next control-2">›</label>
        <label for="carousel-2" class="carousel-control prev control-3">‹</label>
        <label for="carousel-1" class="carousel-control next control-3">›</label>
        <ol class="carousel-indicators">
            <li>
                <label for="carousel-1" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-2" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-3" class="carousel-bullet">•</label>
            </li>
        </ol>
    </div>
</div>

 <div class="container mx-auto">
            <h1 class="text-center text-purple-700 text-center py-6 text-5xl ">
               <p> Volta às aulas...É com a Romapel. <p>A volta às aulas nunca foi tão divertida</p>
            </h1>
            <div class="text-gray-900">
                <div class="grid grid-cols-6 mb-20">
                    <div class="col-span-1 text-center text-6xl py-6"><i class="fa fa-list-alt" aria-hidden="true"></i></div>
                    <div class="col-span-5">
                        <h3 class="text-purple-700 ">
                            At duo ipsum amet sit dolor no duo et, tempor takimata takimata eirmod dolor est sed, tempor ut no et. Sed justo no dolores eirmod accusam duo labore sea, tempor dolore labore erat kasd dolor lorem amet. Sed nonumy ut justo ipsum at magna sit dolores. Ea ipsum dolor invidunt amet est ut invidunt invidunt eirmod, accusam eos et lorem accusam sed. Nonumy erat clita nonumy erat et, aliquyam et et sit invidunt aliquyam sed justo. Nonumy labore tempor takimata ipsum sanctus justo eirmod, ut clita sit et ipsum sed amet vero sanctus. Duo diam amet sea stet. Est sit clita sed justo lorem, ut lorem tempor sanctus lorem eirmod, et justo voluptua invidunt tempor no diam diam et, invidunt.
                        </h3>
                    </div>
                </div>
            </div>
        </div>

 <div class="grid md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-3 p-8">
            <div class="col-span-1 py-6 m-2">
                <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/apontadores.jpg" alt="" class="rounded-3xl relative" >
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Apontadores CIS<br>Preço  R$ 5,00</p></a>
                </div>
                </div>
















 </div>
</body>
</html>
</template>

<style scoped>
html, body {
    margin: 0px;
    padding: 0px;

}

.carousel {
    position: relative;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
    margin-top: 26px;
}

.carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

.carousel-item img {
    display: block;
    height: auto;

}

.carousel-control {
    background: rgba(0, 0, 0, 0.28);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: none;
    font-size: 40px;
    height: 40px;
    line-height: 35px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    width: 40px;
    z-index: 10;
}

.carousel-control.prev {
    left: 2%;
}

.carousel-control.next {
    right: 2%;
}

.carousel-control:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #aaaaaa;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
    display: block;
}

.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

.carousel-indicators li {
    display: inline-block;
    margin: 0 5px;
}

.carousel-bullet {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 35px;
}

.carousel-bullet:hover {
    color: #aaaaaa;
}

#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #428bca;
}

#title {
    width: 100%;
    position: absolute;
    padding: 0px;
    margin: 0px auto;
    text-align: center;
    font-size: 27px;
    color: rgba(255, 255, 255, 1);
    font-family: 'Open Sans', sans-serif;
    z-index: 9999;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);
}

</style>
