<template>
    <p>
        <nuxt-link v-for="(item, index) of items"
          :key="index" :to="item.link" class="block">
            {{ item.texto }}
        </nuxt-link>
    </p>
</template>

<script>
export default {
    name: 'Informacoes',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>