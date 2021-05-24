<template>
    <section id="info" class="flex flex-col pb-4 justify-center text-base
        lg:flex-row lg:justify-around">
        <div class="flex flex-col text-center lg:order-2">
            <Section-Subtitle>Formas de Pagamento</Section-Subtitle>
            <div class="flex flex-row justify-center">
                <FormasPagamento
                    v-for="item of formasPagamento"
                    :key="item.titulo"
                    :titulo="item.titulo"
                    :imagem="item.imagem"
                    :alt="item.titulo"
                />
            </div>
        </div>
        <div class="md:flex flex-row justify-between lg:w-1/2">
            <div class="flex flex-col text-center">
                <Section-Subtitle>Informações</Section-Subtitle>
                <Informacoes :items="[
                    {text: 'Quem somos'},
                    {text: 'FAQ - Dúvidas frequentes'},
                    {text: 'Fale conosco'}
                ]" />
            </div>
            <div class="flex flex-col text-center">
                <Section-Subtitle>Atendimento</Section-Subtitle>
                <Informacoes :items="[
                    {text: '(00) 0000-0000'},
                    {text: 'atendimento@romapel.com.br'},
                    {text: 'Segunda a Sexta das 8h às 18h'}
                ]" />
            </div>
        </div>
    </section>
</template>

<style scoped>
#info{
    background-color: #ffdbe4;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Section-Informacoes',
    computed: {
        ... mapState({
            formasPagamento: state => state.formasPagamento.formasPagamento
        })
    }
}
</script>
