<template>
    <header class="navbar p-2 mx-auto text-white text-base 2xl:max-w-screen">
        <div class="flex flex-row justify-around items-center">
            <div class="md:hidden">Menu</div>
            <nuxt-link to="/"><Logo /></nuxt-link>
            <div class="space-x-4 md:flex md:flex-row md:space-x-7">
                <nuxt-link to="/">Fale conosco</nuxt-link>
                <nuxt-link to="/">Desejados</nuxt-link>
                <nuxt-link to="/">Sacola</nuxt-link>

            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    background-color: #ff5981;
}

header img{
    width: 8rem;
}
</style>

<script>
export default {
    name: 'Header',
}
</script>
