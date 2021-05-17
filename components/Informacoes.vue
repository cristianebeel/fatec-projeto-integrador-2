<template>
    <p>
        <span v-for="(item, index) of items" :key="index" class="block">
            {{ item.text }}
        </span>
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