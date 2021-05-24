<template>
  <div id="page" class="grid grid-cols-2 gap-y-2 px-4 mx-auto sm:grid-cols-3 lg:grid-cols-5">
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