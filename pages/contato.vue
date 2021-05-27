<template>
    <section id="main" class="mx-10 mb-10">
        <Page-Title>{{$t('contact')}}</Page-Title>
        <p class="text-gray-900 dark:text-gray-400 text-base text-center">{{$t('form')}}</p>
        <form @submit.prevent="send" class="mx-auto w-9/12 mt-7">
            <label for="name">{{$t('name')}}</label>
            <input type="text" v-model="name" name="name" id="name" :placeholder="$t('nameExample')" required />

            <label for="email">{{$t('email')}}</label>
            <input type="email" v-model="email" name="email" id="email" :placeholder="$t('emailExample')" required />

            <label for="message">{{$t('yourMessage')}}</label>
            <textarea rows="5" v-model="message" name="message" id="message" :placeholder="$t('messageExample')" required></textarea>

            <div class="flex justify-end gap-4 mx-1">
                <button type="reset" class="py-2 px-6 text-white bg-red-500 rounded-md hover:bg-red-600 focus:bg-red-700 focus:outline-none">{{$t('clean')}}</button>
                <button type="submit" class="py-2 px-10 text-white bg-green-600 rounded-md hover:bg-green-500 focus:bg-green-700 focus:outline-none">{{$t('send')}}</button>
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

    data(){
        return{
            name: "",
            email: "",
            message: ""
        }
    },

    methods: {
        send () {
            this.name = ""
            this.email = ""
            this.message = ""
            alert('Sua mensagem foi enviada com sucesso!')
        }
    }
}
</script>