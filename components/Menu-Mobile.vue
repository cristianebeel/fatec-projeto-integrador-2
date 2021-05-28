<template>
<menu>
  <label for="menu-toggle">
    <img src="~/assets/img/menu-hamburger.svg" alt="Menu" class="h-5 sm:h-8">
  </label>
  <input type="checkbox" name="action-menu" id="menu-toggle" class="hidden" />
  <nav class="flex flex-col absolute top-16 -left-full w-auto h-auto py-2 px-4
    transition-all duration-300 ">
    <nuxt-link to="/escolar?page=1" class="link">{{$t('school')}}</nuxt-link>
    <nuxt-link to="/escritorio?page=1" class="link">{{$t('office')}}</nuxt-link>
    <nuxt-link to="/artes-e-pintura?page=1" class="link">{{$t('artAndPainting')}}</nuxt-link>
    <nuxt-link to="/contato" class="link">{{$t('contact')}}</nuxt-link>
    <span>
      <nuxt-link :to="switchLocalePath('en')" class="link">EN</nuxt-link> | 
      <nuxt-link :to="switchLocalePath('pt-br')" class="link">BR</nuxt-link>
    </span>
  </nav>
</menu>
</template>

<style scoped>
#menu-toggle:checked ~ nav {
  left: 0;
}

nav {
  background-color: #ff5981;
  z-index: 9999; 
}
</style>