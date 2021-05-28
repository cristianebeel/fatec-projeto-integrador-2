<template>
<div>
  <br>
      <section class="text-blue-900 text-lg">
        <div class="container bg-gray-200 px-5 py-18 max-w-8xl mx-auto">
          <div class="text-center font-bold  text-xl mb-20">
            <h1 class="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
            {{$t('faq')}}
            </h1>
            <p class="text-xl text-indigo-900 font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {{$t('commonQuestions')}}
            </p>
          </div>


          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
          <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                {{$t('question01')}}
                </summary>
                <span>
                {{$t('answer01')}}
                </span>
          </details>

              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                {{$t('question02')}}
                </summary>
                <span>
                {{$t('answer02')}}
                </span>
             </details>

              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                {{$t('question03')}}
                </summary>

                <span>
                {{$t('answer03')}}
                </span>
              </details>

              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                {{$t('question04')}}
                </summary>

                <span>
                {{$t('answer04')}}
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                {{$t('question05')}}
                </summary>

                <span class="px-4 py-2">
                {{$t('answer05')}}
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                {{$t('question06')}}
                </summary>

                <span class="px-4 py-2">
                {{$t('answer06')}}
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                {{$t('question07')}}
                </summary>

                <span class="px-4 py-2">
                {{$t('answer07')}}
                </span>
               </details>

               <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                {{$t('question08')}}
                </summary>
                <span>
                {{$t('answer08')}}
                </span>
             </details>
            </div>
          </div>
        </div>
      </section>
    </div>
    </template>
