<template>
  <section id="navbar" class="navbar shadow-xl">
    <nav class="text-white text-base">
      <div class="flex flex-row py-3 justify-around items-center">
        <Dropdown />
        <div class="hidden md:flex flex-row space-x-10 lg:space-x-30 xl:space-x-40">
          <nuxt-link to="/escolar?page=1" class="link">{{$t('school')}}</nuxt-link>
          <nuxt-link to="/escritorio?page=1" class="link">{{$t('office')}}</nuxt-link>
          <nuxt-link to="/artes-e-pintura?page=1" class="link">{{$t('artAndPainting')}}</nuxt-link>
          <nuxt-link to="/contato" class="link">{{$t('contact')}}</nuxt-link>
          <span>
            <nuxt-link :to="switchLocalePath('en')" class="link">EN</nuxt-link> | 
            <nuxt-link :to="switchLocalePath('pt-br')" class="link">BR</nuxt-link>
          </span>
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
    text-decoration: none;
    color: #4f1479;
}
</style>