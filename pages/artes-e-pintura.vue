<template>
  <div>
    <Banner-ArtePintura />
    <Texto-ArtesPintura />
    <Page-Title cor="text-yellow-700">Arte e Pintura</Page-Title>
    <div class="flex flex-row flex-wrap justify-center w-full gap-y-4 gap-x-2 py-4 cursor-pointer
      sm:grid-cols-3 sm:gap-y-5 lg:grid-cols-4 xl:grid-cols-5 xl:px-14 xl:gap-y-12">
      <div v-for="item of produtos" :key="item.titulo">
        <Card-Produto
          v-if="item.categoria.includes('Arte')"
          :titulo="item.titulo"
          :preco="item.preco"
          :imagem="item.imagem"
          :categoria="item.categoria"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  nome: "Produtos",

  computed: {
    ...mapState({
      produtos: (state) => state.produtos.produtos
    }),
  },
};
</script>