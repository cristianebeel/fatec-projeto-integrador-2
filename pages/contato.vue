<template>
    <section id="main" class="mx-10 mb-10">
        <h1 class="my-3 text-3xl font-semibold text-gray-800 dark:text-gray-200">Contato</h1>
        <p class="text-gray-900 dark:text-gray-400 text-base">Fale conosco através do formulário abaixo. Retornaremos o mais rápido possível.</p>
        <p id="result" class="text-red-600 mx-3 mt-2 text-sm">{{ errormsg }}</p>
        <form class="w-9/12 mt-7">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" placeholder="Seu nome" required />

            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Seu e-mail" required />

            <label for="subject">Assunto</label>
            <select id="subject" name="subject" required>
                <option value="a" selected disabled>Selecione uma opção</option>
                <option>Sugestão</option>
                <option>Dúvida</option>
                <option>Reclamação</option>
            </select>

            <label for="message">Sua mensagem</label>
            <textarea rows="5" name="message" id="message" placeholder="Escreva sua mensagem" required></textarea>

            <div class="flex justify-end gap-4 mx-1">
                <button type="reset" v-on:click="clear" class="py-2 px-6 text-white bg-red-500 rounded-md hover:bg-red-600 focus:bg-red-700 focus:outline-none">Limpar</button>
                <button type="submit" v-on:click="send" class="py-2 px-10 text-white bg-green-600 rounded-md hover:bg-green-500 focus:bg-green-700 focus:outline-none">Enviar</button>
            </div>
        </form>
    </section>
</template>

<style scoped>
label{
    @apply mt-5;
    @apply mb-2;
}

label, textarea, select{
    @apply block;
    @apply mb-2;
    @apply text-sm;
    @apply text-gray-800;
}

select{
    @apply text-gray-600;
}

input, textarea, select{
    @apply w-full;
    @apply px-3;
    @apply py-2;
    @apply border;
    @apply border-gray-300;
    @apply rounded;
}

input:focus, textarea:focus, select:focus{
    @apply outline-none;
    @apply border-indigo-300;
}

select {
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat center;
    -webkit-appearance: none;
    background-position-x: right 2%;
}
</style>

<script>
export default {
    name: 'contato',
    data () {
        return {
            errormsg: ''
        }
    },
    methods: {
        send () {
            if(!this.name || !this.email || !this.textarea)
                this.errormsg = '*Preencha todos os campos!'
        },
        clear () {
            this.errormsg=''
        }
    }
}
</script>