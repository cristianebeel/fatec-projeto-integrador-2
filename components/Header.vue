<template>
  <header class="navbar py-4 mx-auto text-white text-base 2xl:max-w-screen">
    <div class="flex flex-row justify-evenly items-center">
      <Menu-Mobile class="md:hidden" />
      <nuxt-link to="/"><Logo class="w-24 h-8 sm:w-32 sm:h-10 md:w-36 md:h-10 lg:w-52 lg:h-12 xl:w-56 xl:h-14 2xl:w-72 2xl:h-20" /></nuxt-link>
      <span class="flex flex-row gap-x-3">
        <nuxt-link to="/chat"><img src="~/assets/img/contact.svg" alt="Fale conosco" class="h-5 sm:h-8"></nuxt-link>
      </span>
    </div>
  </header>
</template>

<style scoped>
header{
  background-color: #ff5981;
}
</style>

<script>
export default {
    name: 'Header',
}
</script>