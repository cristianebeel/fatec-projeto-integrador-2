<template>
  <div class="py-4">
    <Section-Title class="px-6">Últimos produtos adicionados</Section-Title>
    <div class="flex flex-row flex-wrap justify-center w-full gap-y-4 gap-x-2 py-4 cursor-pointer
      sm:grid sm:grid-cols-2 sm:px-24 sm:justify-items-center sm:gap-y-5
      lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        <Card-Produto
          v-for="item of novosProdutos"
          :key="item.titulo"
          :titulo="item.titulo"
          :preco="item.preco"
          :imagem="item.imagem"
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

    novosProdutos(){
        return this.produtos.slice(0, 12)
    }
  },
};
</script>