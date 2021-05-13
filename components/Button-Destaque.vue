<template>
    <nuxt-link :to="path">
        <span v-if="nome" :alt="nome"
            class="flex flex-nowrap justify-center shadow-lg w-36 rounded-2xl py-2 text-xs">
            {{ nome }}
        </span>
    </nuxt-link>
</template>

<style scoped>
span{
    background-color: #f7f7f7;
    color: #393939; 
}
</style>

<script>
export default {
    name: 'Button-Destaque',
    props: {
        path: {
            type: String,
            default: ''
        },
        nome: {
            type: String,
            default: ''
        }
    }
}
</script>