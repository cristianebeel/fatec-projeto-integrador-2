<template>
<section id="page">
<!-- component -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Tutorial by  Tradydaddy</title>
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
                    <div class="bg-cover bg-center h-auto leading-6 text-orange-900 py-24 px-10 object-fill" style="background-image: url(https://cdn.pixabay.com/photo/2016/08/07/18/22/back-to-school-1576791_960_720.jpg)">
                        <div class="md:w-1/2">
                        <p class="text-3xl text-black font-extrabold">Romapel</p>
                        <p class="text-2xl text-black font-bold mb-10 leading-none">Novidades para usar em seus Letterings e Ilustrações</p>

                        </div>
                    </div> <!-- container -->
                    <br>
                </div>

                <div id="slider-2" class=" mx-auto">
                    <div class="bg-cover bg-top  h-auto text-black py-24 px-10 object-fill" style="background-image: url(https://cdn.pixabay.com/photo/2016/09/26/09/59/school-supplies-1695564_960_720.jpg)">
                        <p class="font-extrabold text-center text-sm uppercase">"Pintando o 7 com Romapel"</p>
                        <p class="text-3xl text-black text-center font-extrabold">Romapel - A sua Papelaria</p>
                        <p class="text-2xl text-black text-center mb-10 leading-none">Novidades para usar em seus Letterings e Ilustrações</p>
                        <a href="http://tradydaddy.com/" target="_blank" class="bg-orange-800 py-4 px-8 text-center text-white font-extrabold uppercase text-xs text-center rounded hover:bg-gray-200 hover:text-gray-800">Contato</a>
                    </div> <!-- container -->
                    <br>
                </div>
            </div>
            <div  class="flex justify-between w-12 mx-auto pb-2">
                <button id="sButton1" onclick="sliderButton1()" class="bg-pink-400 rounded-full w-4 pb-2 " ></button>
                <button id="sButton2" onclick="sliderButton2() " class="bg-pink-400 rounded-full w-4 p-2"></button>
            </div>
        </div>
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


        <div class="grid grid-cols-4 p-8">
            <div class="col-span-1 py-6 m-2">
                <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/06-pintura.jpg" alt="" class="rounded-3xl relative" >
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Aquarela Profissional</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/kitpinceis.png" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Pincéis Profissionais</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/crayons.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Crayons/Giz Pastel</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/aquarela.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full  shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Aquarela Infantil </p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/brushes03.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Brushes de várias marcas</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/notebooks.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full  shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cadernos Sortidos - Brochura </p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/aquarelavel.jpg" alt="" class="rounded-3x1 relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lápis Colorido Aquarelável</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/faber2.jpg" alt="" class="rounded-3x1 relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lápis Colorido</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/posca.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Canetas Posca</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/lettering.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Caderno de Lettering</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/stabilo.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-8 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lápis Profissional</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/kitstabilo.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Kit Marca Texto</p></a>
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
