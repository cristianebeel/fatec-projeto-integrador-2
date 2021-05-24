<template>
<section id="page">
<Carousel />
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

    <main class="w-full">
        <div class="relative ">
            <div class="sliderAx w-auto h-3/5">
                <div id="slider-1" class="mx-auto">
                    <div class="bg-cover bg-center w-auto h-auto py-24 px-10 object-fill" style="background-image: url(https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_960_720.jpg)">
                        <div class="md: h-1/2 w-1">
                        <p class=" text-3xl text-purple-900  text-sm uppercase font-bold">Volta às aulas...</p>
                        </div>
                        </div> <!-- container -->
                        <br>
                        </div>

                <div id="slider-2" class=" mx-auto">
                    <div class="bg-cover bg-center w-auto  h-auto  py-24 px-10 object-fill" style="background-image:url(https://cdn.pixabay.com/photo/2017/10/10/00/03/kids-2835430_960_720.jpg)">
                    <p class=" text-3xl text-purple-900 text-sm uppercase font-bold">É com a Romapel.</p>
                    <p class="text-2xl text-purple-800  font-bold mb-10 leading-none">A volta às aulas nunca foi tão divertida.</p>
                        <a href="http:/http://localhost:3000/Contato//" target="_blank" class="bg-purple-600 py-4 px-8 text-center text-white font-extrabold uppercase text-xs text-center rounded hover:bg-pink-200 hover:text-pink-800">Contato</a>
                    </div> <!-- container -->
                    <br>
                </div>
            </div>

            <br>
            <div  class="flex justify-between w-12 mx-auto pb-2 ">
                <button id="sButton1" onclick="sliderButton1()" class="bg-purple-400 rounded-full w-4 pb-2 " ></button>
                <button id="sButton2" onclick="sliderButton2()" class="bg-purple-400 rounded-full w-4 p-2"></button>
            </div>
            <br>
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

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/borrachas.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Borrachas<br>Preço  R$ 2,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/faber12eco6.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Lápis Faber ECO<br>Preço  R$ 16,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/dualcis.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full  shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                 Dual Brush CIS<br>Preço  R$ 22,00 </p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/estojo1.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Estojo Mickey<br>Preço  R$ 11,40</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/estojo3.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Estojo grande<br>Preço  R$ 14,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/estojo4.jpg" alt="" class="rounded-3x1 relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Estojo Metálico<br>Preço  R$ 28,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/estojo2.webp" alt="" class="rounded-3x1 relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Estojo Color<br>Preço  R$ 13,00</p></a>
                </div>
                </div>

            <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/EVAestampado.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  EVA Estampado<br>Preço  R$ 2,50</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/EVAglitter.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  EVA Glitter<br>Preço  R$ 2.80</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/EVAcolorido.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  EVA Colorido<br>Preço  R$ 1,90</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/sulfite2.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Sulfite Colorido<br>Preço  R$ 6,00</p></a>
                </div>
                </div>

                 <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/creativepaper.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Creative Paper<br>Preço  R$ 7,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/pastaL.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Pastas L<br>Preço  R$ 1,50</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/Alice.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                 Cad. Univ. Alice<br>Preço  R$ 16,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/flamingo1.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cad.Univ.Flamingo<br>Preço  R$ 14,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/flamingo2.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cad.Univ.Flamingo<br>Preço  R$ 15,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/flamingo3.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cad.Univ.Flamingo<br>Preço  R$ 12,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/titans1.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cad.Univ.Teen Titans<br>Preço  R$ 16,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/titans2.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cad.Univ.Teen Titans<br>Preço  R$ 16,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/brochuranow.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                 Brochura Now United <br>Preço  R$ 15,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/univ-magic.webp" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cad. Univ. Sortidos<br>Preço  R$ 10,00</p></a>
                </div>
                </div>

                <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/mochila3.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Mochila Unicórnio <br>Preço  R$ 36,00</p></a>
                </div>
                </div>

                 <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/mochilacat.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Mochila Blue Cat<br>Preço  R$ 38,00</p></a>
                </div>
                </div>

                 <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/mochilakit.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Kit Mochila/Lancheira<br>Preço  R$ 42,00</p></a>
                </div>
                </div>

                 <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/reguas.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Réguas Maleáveis Pastel<br>Preço  R$ 4,50</p></a>
                </div>
                </div>

                  <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/cartografia1.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Caderno de Desenho<br>Preço  R$ 10,00</p></a>
                </div>
                </div>

                 <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/cartografia2.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Caderno de Desenho<br>Preço  R$ 10,00</p></a>
                </div>
                </div>

                 <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/cartografia3.jpg" alt="auto" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cad. Cartografia Desenho<br>Preço  R$ 10,00</p></a>
                </div>
                </div>

                 <div class="col-span-1 py-6 m-2">
                  <div class="relative">
                  <a href="http://localhost:3000/" target="_blank">
                  <img src="~/assets/img/cat/cartografia4.jpg" alt="" class="rounded-3xl relative">
                  <p class="mb-3 p-4 w-full shadow-outline text-xl tracking-wide text-base text-shadow text-teal-800 font-bold">
                  Cad. Cartografia Flamingo<br>Preço  R$ 10,00</p></a>
                </div>
                </div>
        </div>
    </main>

</body>
</html>

</section>
</template>















