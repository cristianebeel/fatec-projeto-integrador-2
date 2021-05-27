<template>
    <article class="h-56 w-36 bg-white rounded-lg relative text-center py-2 font-bold
        sm:h-64 sm:w-44 md:h-72 md:w-56 lg:h-80 lg:w-60 xl:w-72 2xl:h-96 2xl:w-80">
        <figure>
            <img :src="imagem" :alt="titulo" class="object-contain h-32 w-full px-2
                sm:h-36 md:h-40 lg:h-48">
        </figure>
        <p class="text-xs text-gray-600 px-1.5 py-2 leading-tight
            sm:px-2 sm:text-sm md:text-base md:py-5
            lg:py-4 xl:text-xl xl:py-3 2xl:text-2xl 2xl:py-8">{{ titulo }}</p>
        <p class="bg-indigo-600 text-white absolute bottom-0 w-full text-sm py-1.5 rounded-b-lg
            hover:bg-green-700 md:py-2 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">R${{ preco }}</p>
    </article>
</template>

<script>
export default {
    name:'Card-Produto',
    props: {
        titulo: {
            type: String,
            default: ''
        },
        preco: {
            type: String,
            default: ''
        },
        imagem: {
            type: String,
            default: ''
        }
    }
}
</script>