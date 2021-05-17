<template>
    <figure>
        <img v-if="imagem && titulo" :src="imagem" :alt="titulo" class="h-7 w-auto md:h-10">
    </figure>
</template>

<script>
export default {
    name: 'FormasPagamento',
    props: {
        titulo: {
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