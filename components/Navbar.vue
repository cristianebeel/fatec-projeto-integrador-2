<template>
    <section id="navbar" class="navbar shadow-xl">
        <nav class="text-white text-base">
            <div class="hidden md:flex flex-row py-3 justify-around items-center">
                    <nuxt-link to="#">Todas as categorias</nuxt-link>
                <div class="space-x-10 lg:space-x-30 xl:space-x-40">
                    <nuxt-link to="/escolar" class="link">Escolar</nuxt-link>
                    <nuxt-link to="/escritorio" class="link">Escritório</nuxt-link>
                    <nuxt-link to="/artes-e-pintura" class="link">Artes e Pintura</nuxt-link>
                    <nuxt-link to="/contato" class="link">Contato</nuxt-link>
                </div>
            </div>
        </nav>
    </section>
</template>

<style scoped>
nav{
    background-color: #ff3c77;

}
nav img{
    width: 5rem;
}

.link:hover{
    text-decoration: underline;
}
</style>