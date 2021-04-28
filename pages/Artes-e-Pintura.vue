<template>
<section id="page">
<!-- component -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS</title>
    <script src="https://use.fontawesome.com/b658ad5274.js"></script>
    <link rel="stylesheet" href="css/output.css">
</head>
<body class="bg-white">
<header class="bg-white shadow-lg  border-b-2 border-gray-400 ">
</header>
    <main class="w-full">
        <div class="relative ">
            <div class="sliderAx h-4/5">
                <div id="slider-1" class="mx-auto">
                    <div class="bg-cover bg-top h-auto leading-6 text-red-900 py-24 px-10 object-fill" style="background-image: url(https://cdn.pixabay.com/photo/2018/03/06/17/40/paper-3204064_960_720.jpg)">
                        <div class="md:w-1/2">
                        <p class="text-3xl text-black text-center font-extrabold">Romapel</p><br>
                        <p class="text-3xl text-black text-right font-bold md-10 leading-none">'Pintando o 7 com Romapel'</p>

                        </div>
                    </div> <!-- container -->
                    <br>
                </div>

                <div id="slider-2" class=" mx-auto">
                    <div class="bg-cover bg-top h-auto text-black py-24 px-10 object-fill" style="background-image: url(https://cdn.pixabay.com/photo/2016/09/26/09/59/school-supplies-1695564_960_720.jpg)">
                        <p class="text-3xl text-black text-justify text-sm uppercase font-bold ">"Lançamentos e Novidades"</p>
                        <p class="text-2xl text-black text-justify font-bold mb-10 leading-none"> 'Romapel - A sua Papelaria'</p>
                        <br>
                        <a href="http:/http://localhost:3000/Contato//" target="_blank" class="bg-orange-800 py-4 px-8 text-center text-white font-extrabold uppercase text-xs text-center rounded hover:bg-gray-200 hover:text-gray-800">Contato</a>
                    </div> <!-- container -->
                    <br>
                </div>
            </div>
            <br>

            <div  class="flex justify-between w-12 mx-auto ">
                <button id="sButton1" onclick="sliderButton1()" class="bg-pink-400 rounded-full w-4 pb-2 " ></button>
                <button id="sButton2" onclick="sliderButton2() " class="bg-pink-800 rounded-full w-4 p-2"></button>
            </div>
            <br>
        </div>
        <br>

        <div class="container mx-auto">
            <h1 class="text-center text-red-700 py-6 text-5xl ">
                Novidades para usar em seus Letterings e Ilustrações
            </h1>
            <div class="text-gray-900">
                <div class="grid grid-cols-6 mb-20">
                    <div class="col-span-1 text-center text-6xl py-4"><i class="fa fa-gift" aria-hidden="true"></i></div>
                    <div class="col-span-5">
                        <h3 class="text-red-700 ">
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
                  <img src="~/assets/img/cat/aquarela.webp" alt="" class="rounded-3xl relative" >
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Aquarela <br>Preço  R$ 25,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/pinceis.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Pincéis <br>Preço  R$ 10,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/gizpastelecopentel.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Giz Pastel Eco<br>Preço  R$ 26,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/kitreguas.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full  shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                 Kit Reguas<br>Preço  R$ 12,00 </p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/brushes09.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Brushes CIS<br>Preço  R$ 36,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/pastel-stabilo.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Kit Marca Texto<br>Preço  R$ 24,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/pencil3.jpg" alt="" class="rounded-3x1 relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lápis Colorido Aquarelável<br>Preço  R$ 28,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/maletaorganizadora.jpg" alt="" class="rounded-3x1 relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Maleta<br>Preço  R$ 28,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/posca.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Canetas Posca<br>Preço  R$ 40,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/lettering.png" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                   Book Lettering<br>Preço  R$ 27,50</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/caligrafia.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Book Caligrafia<br>Preço  R$ 31,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/limpatipo.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Limpa-tipo<br>Preço  R$ 4,00</p></a>
                </div>
                </div>

                 <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/borrachas.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Borrachas cores sortidas<br>Preço  R$ 40,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/kitcolor1.webp" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Kit desenho e pintura<br>Preço  R$ 27,50</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/blackpencil.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
              Boxlápis grafite preta.<br>Preço  R$ 31,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/nanquim.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
               Canetas nanquim.<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/kitcolor3.webp" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Kit lápis Color variado<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

<div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/lapiseira01.webp" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lapiseira e porta grafite<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

<div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/lapiseira02.webp" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lapiseira<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

<div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/lapiseira03.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lapiseira<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/lapiseira04.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                 Lapiseira<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/oilpastel.png" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Pastel/Oleoso<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/aquarelavel61cores.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lápis Colorido <br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/aquarelavel.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lápis Colorido <br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/brushes09.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Brushes tons<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/brushcis.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Brushes CIS<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

<div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/colorbic.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                 Kit Escolar BIC<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/colorpen2.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Canetas color<br>Preço  R$ 18,00</p></a>
                </div>
                </div>

                </div>
                </main>

<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
<script>
    var cont=0;
function loopSlider(){
  var xx= setInterval(function(){
        switch(cont)
        {
        case 0:{
            $("#slider-1").fadeOut(400);
            $("#slider-2").delay(400).fadeIn(400);
            $("#sButton1").removeClass("bg-purple-800");
            $("#sButton2").addClass("bg-purple-800");
        cont=1;

        break;
        }
        case 1:
        {

            $("#slider-2").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton2").removeClass("bg-purple-800");
            $("#sButton1").addClass("bg-purple-800");

        cont=0;

        break;
        }


        }},8000);

}

function reinitLoop(time){
clearInterval(xx);
setTimeout(loopSlider(),time);
}



function sliderButton1(){

    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=0

    }

    function sliderButton2(){
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=1

    }

    $(window).ready(function(){
        $("#slider-2").hide();
        $("#sButton1").addClass("bg-purple-800");


        loopSlider();
});
  </script>
</body>
</html>

</section>
</template>

