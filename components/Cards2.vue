<template>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@1.4.6/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">

<div>
	<div class="bannerFondo bg-green-800	bg-left-top bg-auto bg-repeat-x" style="background-image: url(./img/continuartl_4.png)">
	</div>

      <div class="-mt-64 ">
        <div class="w-full text-center">
          <p class="text-sm tracking-widest text-white">Subtitle</p>
          <h1 class="font-bold text-5xl text-white">
              Title
          </h1>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 ">

          <div class="p-2 sm:p-10 text-center cursor-pointer">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                  <div class="space-y-10">
                      <i class="fa fa-spa" style="font-size:48px;"></i>

                      <div class="px-6 py-4">
                          <div class="space-y-5">
                              <div class="font-bold text-xl mb-2">Spa</div>
                              <p class="text-gray-700 text-base">
                                  Todo tipo de masajes y técnicas
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="p-2 sm:p-10 text-center cursor-pointer text-white">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500">
                  <div class="space-y-10">
                    <i class="fa fa-head-side-mask" style="font-size:48px;"></i>
                      <div class="px-6 py-4">
                          <div class="space-y-5">
                              <div class="font-bold text-xl mb-2">Bioseguridad</div>
                              <p class="text-base">
                                  Altos estandares de bioseguridad
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                  <div class="space-y-10">
                      <i class="fa fa-swimmer" style="font-size:48px;"></i>

                      <div class="px-6 py-4">
                          <div class="space-y-5">
                              <div class="font-bold text-xl mb-2">Piscina</div>
                              <p class="text-gray-700 text-base">
                                  Piscina temperada
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
      </div>

  </div>
</body>
</html>
</template>

<style scoped>
.bannerFondo{
        height: 400px;
}
</style>>


