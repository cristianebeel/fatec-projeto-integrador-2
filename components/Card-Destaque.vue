<template>
    <nuxt-link :to="path">
        <div class="h-58 w-44 rounded bg-white shadow flex flex-col items-center hover:skew-x-1
                    transition duration-200 ease-in-out transform lg:h-54 lg:w-52">
            <figure>
                <img v-if="imagem" :src="imagem" :alt="nome"
                    class="h-32 w-full object-cover lg:h-40">
            </figure>
            <h2 class="py-3 text-sm lg:text-base">{{ nome }}</h2>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: 'Card-Destaque',
    props: {
        path: {
            type: String,
            default: ''
        },
        nome: {
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