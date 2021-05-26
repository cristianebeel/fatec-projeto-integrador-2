<template>
    <div class="w-3/4 mx-auto">
        <h2 class=" font-bold text-center text-green-800 mt-12 mb-6 text-3xl">
            {{$t('letteringAndIllustrations')}}
        </h2>
        <div class="flex flex-row content-center space-x-6">
            <img src="~/assets/img/gift.svg" aria-hidden="true" class="h-24">
            <div class="flex-col space-y-3">
                <p class="text-green-700 font-bold leading-normal">
                    {{$t('letteringText')}}
                </p>
                <p class="text-green-700 font-bold leading-normal">
                    {{$t('letteringText2')}}
                </p>
                <p class="text-green-700 font-bold leading-normal">
                    {{$t('letteringText3')}}
                </p>
            </div>
        </div>
    </div>
</template>