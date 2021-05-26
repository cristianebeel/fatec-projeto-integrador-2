<template>
    <header class="navbar py-4 mx-auto text-white text-base 2xl:max-w-screen">
        <div class="flex flex-row justify-evenly items-center">
            <div class="md:hidden"><img src="~/assets/img/menu-hamburger.svg" alt="Menu" class="h-5"></div>
            <nuxt-link to="/"><Logo /></nuxt-link>
            <div class="flex flex-row">
                <nuxt-link to="/chat"><img src="~/assets/img/contact.svg" alt="Fale conosco" class="h-5"></nuxt-link>
                <nuxt-link to="/"><img src="~/assets/img/heart.svg" alt="Minha lista" class="h-5"></nuxt-link>
                <nuxt-link to="/"><img src="~/assets/img/cart.svg" alt="Minha sacola" class="h-5"></nuxt-link>
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    background-color: #ff5981;
}

header img{
    width: 3rem;
}
</style>

<script>
export default {
    name: 'Header',
}
</script>