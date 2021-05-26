<template>
  <div>
    <Categorias-Title>Papelaria</Categorias-Title>
    <div class="flex flex-row flex-wrap justify-center w-full gap-y-4 gap-x-2 py-4 cursor-pointer sm:gap-y-5 xl:px-14 xl:gap-y-12">
      <div v-for="item of produtos" :key="item.titulo">
        <Card-Produto
          v-if="item.subcategoria.includes('Papelaria')"
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
  nome: 'caderno',
  layout: 'categorias',

  computed: {
    ...mapState({
      produtos: (state) => state.produtos.produtos
    }),
  },
};
</script>