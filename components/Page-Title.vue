<template>
    <h1 class="text-xl font-bold text-center mt-9 mb-6 md:text-2xl lg:text-3xl xl:text-4xl" :class="cor">
        <slot />
    </h1>
</template>

<script>
export default {
    name: 'Page-Title',
    props:{
        cor:{
            type: String,
            default: 'text-gray-700'
        }
    }
}
</script>