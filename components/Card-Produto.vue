<template>
    <article class="w-44">
        <img :src="imagem" :alt="titulo" class="w-full">
        <div class="pt-3 pb-7 text-center">
            <p class="text-gray-80 font-bold text-lg">{{ titulo }}</p>
            <p class="text-gray-800 text-lg">{{ preco }}</p>
        </div>
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