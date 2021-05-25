<template>
  <div class="grid grid-cols-2 gap-y-2 px-4 py-8 justify-items-center cursor-pointer
    sm:grid-cols-3 sm:gap-y-5 lg:grid-cols-4 xl:grid-cols-5 xl:px-14 xl:gap-y-12">
    <div v-for="item of produtos" :key="item.titulo">
      <Card-Produto
        v-if="item.categoria.includes('Escolar')"
        :titulo="item.titulo"
        :preco="item.preco"
        :imagem="item.imagem"
        :categoria="item.categoria"
      />
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