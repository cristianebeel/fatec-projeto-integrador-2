<template>
    <section id="slider">
        <div class="carousel relative shadow-xl">
            <div class="carousel-inner relative overflow-hidden w-full">
            
                <!--Slide 1-->
                <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
                <div class="carousel-item absolute opacity-0">
                    <div class="car-banner-01">
                        <p>Materiais Escolares</p>
                    </div>
                </div>
                <label for="carousel-4" class="prev control-1 ml-2 md:ml-10 flex justify-center absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto"></label>
                <label for="carousel-2" class="next control-1 mr-2 md:mr-10 flex justify-center absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto"></label>

                <!--Slide 2-->
                <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
                <div class="carousel-item absolute opacity-0">
                    <div class="car-banner-02">
                        <p>Suprimentos para Escritório</p>
                    </div>
                </div>
                <label for="carousel-1" class="prev control-2 ml-2 md:ml-10 flex justify-center absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto"></label>
                <label for="carousel-3" class="next control-2 mr-2 md:mr-10 flex justify-center absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto"></label>

                <!--Slide 3-->
                <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
                <div class="carousel-item absolute opacity-0">
                    <div class="car-banner-03">
                        <p>Artes & Pintura</p>
                    </div>
                </div>
                <label for="carousel-2" class="prev control-3 ml-2 md:ml-10 flex justify-center absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto"></label>
                <label for="carousel-4" class="next control-3 mr-2 md:mr-10 flex justify-center absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto"></label>

                <!--Slide 4-->
                <input class="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="" />
                <div class="carousel-item absolute opacity-0">
                    <div class="car-banner-04">
                        <p>Contato</p>
                    </div>
                </div>
                <label for="carousel-3" class="prev control-4 ml-2 md:ml-10 flex justify-center absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto"></label>
                <label for="carousel-1" class="next control-4 mr-2 md:mr-10 flex justify-center absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto"></label>
                
                <ol class="carousel-indicators">
                    <li class="inline-block mr-3">
                        <label for="carousel-1" class="carousel-bullet cursor-pointer block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-400">•</label>
                    </li>
                    <li class="inline-block mr-3">
                        <label for="carousel-2" class="carousel-bullet cursor-pointer block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-400">•</label>
                    </li>
                    <li class="inline-block mr-3">
                        <label for="carousel-3" class="carousel-bullet cursor-pointer block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-400">•</label>
                    </li>
                    <li class="inline-block mr-3">
                        <label for="carousel-4" class="carousel-bullet cursor-pointer block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-400">•</label>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<style scoped>
.carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    height: 30vh;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

.carousel-item p{
    @apply text-gray-800;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3,
#carousel-4:checked ~ .control-4 {
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

.carousel-indicators label:hover {
    @apply text-gray-500;
}

#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet,
#carousel-4:checked ~ .control-4 ~ .carousel-indicators li:nth-child(4) .carousel-bullet {
    @apply text-pink-300;
}

.car-banner-01 {
    background-image: url(~/assets/img/banners/banner-01.jpg);
}

.car-banner-02 {
    background-image: url(~/assets/img/banners/banner-02.jpg);
}

.car-banner-03 {
    background-image: url(~/assets/img/banners/banner-03.jpg);
}

.car-banner-04 {
    background-image: url(~/assets/img/banners/banner-04.jpg);
}
.car-banner-01, .car-banner-02, .car-banner-03, .car-banner-04 {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.car-banner-01, .car-banner-02, .car-banner-03, .car-banner-04{
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 100%;
}

.car-banner-01 p, .car-banner-02 p, .car-banner-03 p, .car-banner-04 p{
    display: flex;
    justify-content: center;
    background-color: #fefefe;
    width: 100%;
    font-size: .8rem;
    margin-bottom: 2.5rem;
    padding: .1rem;
    color: #262626;
    box-shadow: 0 .05rem .2rem #c4c4c4;
}

.next{
    background: url('~/assets/img/next.svg') no-repeat center;
}

.prev{
    background: url('~/assets/img/prev.svg') no-repeat center;
}

.next, .prev{
    width: 1.5rem;
    height: 1.5rem;
    border: .02rem #282828 solid;
    position: absolute;
    bottom: 2rem;
    background-size: 20%;
    background-color: #fff;
}

.next:active, .prev:active,
.next:focus, .prev:focus,
.next:hover, .prev:hover{
    @apply bg-pink-200;
    @apply border-gray-500;
}

@media(min-width: 768px){
    .carousel-item {
        height: 40vh;
    }

    .car-banner-01 p, .car-banner-02 p, .car-banner-03 p, .car-banner-04 p{
        font-size: 1.2rem;
        margin-bottom: 2.5rem;
    }

    .next, .prev{
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1.5rem;
    }
}

@media(min-width: 1024px){
    .carousel-item{
        height: 50vh;
    }

    .car-banner-01 p, .car-banner-02 p, .car-banner-03 p, .car-banner-04 p{
        font-size: 1.5rem;
        margin-bottom: 2.5em;
        padding: .5rem;
    }
}

@media(min-width:1280px){
    .car-banner-01 p, .car-banner-02 p, .car-banner-03 p, .car-banner-04 p{
        font-size: 2rem;
        margin-bottom: 4rem;
    }

    .next, .prev{
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.5rem;
    }
}

@media(min-width:1920px){
    .car-banner-01 p, .car-banner-02 p, .car-banner-03 p, .car-banner-04 p{
        font-size: 2.5rem;
        margin-bottom: 4.5rem;
    }

    .next, .prev{
        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;
    }
}
</style>