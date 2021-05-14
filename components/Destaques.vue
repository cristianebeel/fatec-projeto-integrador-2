<template>
    <div>
        <div class="flex flex-wrap justify-center gap-y-3 gap-x-2 h-auto w-full md:hidden">
            <Button-Destaque
                v-for="item of destaques"
                :key="item.nome"
                :path="item.path"
                :nome="item.nome"
            />
        </div>
        <div class="hidden md:flex mx-auto w-11/12 overflow-x-auto overflow-y-visible lg:w-full">
            <div class="hidden md:flex flex-row justify-between gap-3 lg:mx-auto">
                <Card-Destaque
                    v-for="item of destaques"
                    :key="item.nome"
                    :path="item.path"
                    :nome="item.nome"
                    :imagem="item.imagem"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Destaques',

    computed: {
        ...mapState({
            destaques: state => state.destaques.destaques
        })
    }
}
</script>