<template>
    <section id="navbar shadow-2xl">
        <nav class="text-white text-2xl p-2">
            <div class="flex justify-around items-center pr-10 py-0">
                <nuxt-link to="/"><Logo /></nuxt-link>
                <div class="flex space-x-40 py-2">
                    <nuxt-link to="/" class="link">Escolar</nuxt-link>
                    <nuxt-link to="/" class="link">Escritório</nuxt-link>
                    <nuxt-link to="/" class="link">Arte e Papelaria</nuxt-link>
                    <nuxt-link to="/" class="link">Contato</nuxt-link>
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