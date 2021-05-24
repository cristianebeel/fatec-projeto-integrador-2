<template>
    <article class="h-56 w-32 bg-white rounded-lg relative text-center py-2 font-bold">
        <img :src="imagem" :alt="titulo" class="object-contain h-32 px-2">
            <p class="title text-gray-800 px-1.5 py-1 break-words">{{ titulo }}</p>
            <p class="bg-indigo-600 text-white absolute bottom-0 w-full text-sm py-1.5">R${{ preco }}</p>
    </article>
</template>

<style scoped>
.title{
    font-size: .8rem;
    line-height: 1rem;
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