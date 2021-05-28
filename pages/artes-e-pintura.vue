<template>
  <div>
    <Banner-ArtePintura />
    <Texto-ArtesPintura />
    <Page-Title cor="text-yellow-700">{{$t('artAndPainting')}}</Page-Title>

    <div v-if="!produtos.length">
      <Erro-Produtos />
    </div>

    <div v-else>
      <div class="grid grid-flow-row grid-cols-2 gap-y-4 mx-2 justify-items-center
        sm:grid-cols-3 sm:mx-8 sm:gap-y-6 lg:max-w-screen-lg lg:mx-auto lg:grid-cols-4 lg:gap-x-10
        xl:mx-12 xl:max-w-screen-xl xl:mx-auto xl:gap-x-20 2xl:gap-x-40">
        <Card-Produto
          v-for="item of produtosAtuais" :key="item.titulo"
          :titulo="item.titulo"
          :preco="item.preco"
          :imagem="item.imagem"
        />
      </div>
      <div v-if="paginasTotais > 1" class="flex flex-row space-x-2 mt-8 justify-center">
        <nuxt-link v-for="n in paginasTotais" :key="n" :to="`?page=${n}`"
          class="bg-red-100 rounded-md p-3 hover:bg-indigo-200">
          {{ n }}
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "artes-e-pintura",

  data(){
    return{
      paginaAtual: 1
    }
  },

  computed: {
    ...mapState({
      produtos: (state) => state.produtos.produtos.filter(item => item.categoria === 'Arte')
    }),

    paginasTotais(){
      return Math.ceil(this.produtos.length / 12)
    },

    produtosAtuais(){
      return this.produtos.slice(
        (this.paginaAtual - 1) * 12,
        (this.paginaAtual - 1) * 12 + 12
      )
    }
  },

  watch: {
    '$route.query':{
      immediate: true,

      handler(query){
        this.paginaAtual = query.page
      }
    }
  }
};
</script>