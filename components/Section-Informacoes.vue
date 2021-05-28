<template>
    <section id="info" class="flex flex-col mt-4 pt-4 pb-8 justify-center text-base
        lg:flex-row lg:justify-around">
        <div class="flex flex-col text-center lg:order-2">
            <Section-Subtitle>{{$t('paymentMethods')}}</Section-Subtitle>
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
        <div class="md:flex flex-row justify-between lg:w-2/5">
            <div class="flex flex-col text-center">
                <Section-Subtitle>{{$t('info')}}</Section-Subtitle>
                <Informacoes :items="[
                    {texto: $t('whoWeAre'), link: '/sobre'},
                    {texto: $t('FAQ'), link: '/faq'},
                    {texto: $t('talkToUs'), link: '/contato'}
                ]" />
            </div>
            <div class="flex flex-col text-center">
                <Section-Subtitle>{{$t('attendants')}}</Section-Subtitle>
                <Informacoes :items="[
                    {texto: '(00) 0000-0000', link: '#'},
                    {texto: 'atendimento@romapel.com.br', link: '#'},
                    {texto: $t('mondayToFriday'), link: '#'}
                ]" />
            </div>
        </div>
        <div class="flex flex-col text-center lg:order-3">
          <Section-Subtitle>{{$t('followUs')}}</Section-Subtitle>
          <center><figure title="Facebook">
            <a href="https://www.facebook.com/papelariaromapel" target="_blank"><Logo-Facebook class="h-14 object-center" /></a>
          </figure></center>
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