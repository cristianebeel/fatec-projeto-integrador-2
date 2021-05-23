<template>
    <div>
        <span v-if="waiting" class="mt-6">Aguarde...</span>
        <template v-else>
            <form class="p-8 flex flex-col gap-3 w-full" @submit.prevent="addProduct">
                <input v-model="title" type="text" placeholder="Título">
                <input v-model="price" type="text" placeholder="Preço">
                <select v-model="category" name="category" multiple>
                    <option value="" disabled>Categoria(s)</option>
                    <option value="escolar">Escolar</option>
                    <option value="escritorio">Escritório</option>
                    <option value="arte">Artes e Pintura</option>
                </select>
                <select v-model="subcategory" name="subcategory">
                    <option value="" disabled selected>Subcategoria</option>
                    <option value="agenda">Agenda</option>
                    <option value="escrita">Escrita</option>
                    <option value="estojo">Estojo</option>
                    <option value="mochila">Mochila</option>
                    <option value="organizacao">Organização</option>
                    <option value="pintura">Pintura</option>
                    <option value="planner">Planner</option>
                </select>
                <input type="file" id="upload">
                <div class="flex justify-end gap-4 mx-1">
                    <button type="reset" class="py-2 px-6 text-white bg-red-500 rounded-md
                        hover:bg-red-600 focus:bg-red-700 focus:outline-none"
                    >
                        Limpar
                    </button>
                    <button type="submit"
                    class="py-2 px-10 text-white bg-green-600 rounded-md
                    hover:bg-green-500 focus:bg-green-700 focus:outline-none"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </template>
    </div>
</template>

<style scoped>
input, select, textarea{
    border: 2px solid #333;
    border-radius: .5rem;
    padding: .5rem;
    width: 100%;
}
</style>

<script>
import io from 'socket.io-client'

export default {
    name: 'novo-produto',
    props: {
        categoria: {
            type: String,
            default: ''
        }
    },

    data(){
        return{
            waiting: false,
            title: '',
            price: '',
            category: '',
            subcategory: '',
            products: []
        }
    },

    mounted(){
        const socket = io('https://fatec-herois-resistencia.herokuapp.com')

        socket.on('product-created', created => {
            this.products.push(created)
        })
    },

    async fetch(){
        try{
            this.waiting = true
            this.products = await this.$axios.$get('https://fatec-herois-resistencia.herokuapp.com/products')
        }catch{
            alert('Ops! Erro de conexão.')
        }finally{
            this.waiting = false
        }
    },

    methods: {
        async addProduct(){
            try{
                this.waiting = true
                const image = `~/assets/img/produtos/${upload.files[0].name}`
                const product = { title: this.title, price: this.price, category: this.category,
                    subcategory: this.subcategory,  image: image }

                await this.$axios.$post(`https://fatec-herois-resistencia.herokuapp.com/products`, product)
                this.title = ''
                this.price = ''
                this.category = ''
                this.subcategory = ''
            }catch{
                alert('Erro ao cadastrar produto.')
            }finally{
                this.waiting = false
            }
        }
    }
}
</script>