<template>
    <article class="h-56 w-36 bg-white rounded-lg relative text-center py-2 font-bold
        sm:h-64 sm:w-44 md:h-72 md:w-60 lg:h-80 xl:h-80 xl:w-64 2xl:h-96 2xl:w-72">
        <img :src="imagem" :alt="titulo" class="object-contain h-32 w-full px-2
            sm:h-36 md:h-40 lg:h-48">
        <p class="title text-gray-600 px-1.5 py-1 leading-tight
            sm:px-2 sm:py-3 sm:text-sm md:text-base md:py-5
            lg:text-lg lg:py-2 xl:text-xl xl:py-4">{{ titulo }}</p>
        <p class="bg-indigo-600 text-white absolute bottom-0 w-full text-sm py-1.5 rounded-b-lg
            hover:bg-green-700 md:py-2 md:text-base lg:text-lg xl:text-xl">R${{ preco }}</p>
    </article>
</template>

<style scoped>
@media(max-width: 320px){
    .title{
        font-size: .75rem;
    }
}
</style>

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