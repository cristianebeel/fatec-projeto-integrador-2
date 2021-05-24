<template v-if="produtos.categoria.includes('Escolar')">
    <div id="page" class="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-3 p-8">
        <Card-Produto
            v-for="item of produtos"
            :key="item.titulo"
            :titulo="item.titulo"
            :preco="item.preco"
            :imagem="item.imagem"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    nome: 'Produtos',

    computed:{
        ...mapState({
            produtos: state => state.produtos.produtos
        })
    }
}
</script>