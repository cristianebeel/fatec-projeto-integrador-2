<template>
  <div class="bg-red-200 w-full h-44 py-7 px-2 my-8 lg:mb-24">
    <div class="md:py-8 px-4 pt-3 pb-4 -mx-4">
        <div class="max-w-xl mx-auto">
          <br>
            <h3 class="text-xl text-left font-semibold leading-8 text-gray-900 lg:text-2xl">{{$t('signUpNewsletter')}}</h3>
            <p class="text-gray-900 text-sm lg:text-xl">
              {{$t('newsEmail')}}
            </p>
            <form action="#" class="mt-2">
                <div class="flex items-center">
                    <input type="email" class="w-full px-2 py-4 mr-2 bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none" required>
                    <button class="bg-green-600 text-white px-5 py-2 rounded shadow" style="margin-left: -7.8rem;">{{$t('signUp')}}</button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>