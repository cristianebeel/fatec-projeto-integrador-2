<template>
    <div>
        <span v-if="waiting" class="mt-6">Aguarde...</span>
        <template v-else>
            <form class="p-8 flex flex-col gap-3 w-full" @submit.prevent="addProduct">
                <input v-model="title" type="text" placeholder="Título" class="w-full">
                <input v-model="price" type="text" placeholder="Preço" class="w-1/3">
                <select v-model="category">
                    <option value="" selected="selected" disabled
                        classs="w-1/2">Selecione uma categoria</option>
                    <option value="agenda">Agenda</option>
                    <option value="escrita">Escrita</option>
                    <option value="estojo">Estojo</option>
                    <option value="mochila">Mochila</option>
                    <option value="organizacao">Organização</option>
                    <option value="pintura">Pintura</option>
                    <option value="planner">Planner</option>
                </select>
                <input type="file" id="upload">
                <textarea v-model="description" type="text" rows="5" placeholder="Descrição" />
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
    data(){
        return{
            waiting: false,
            title: '',
            price: '',
            category: '',
            description: '',
            products: []
        }
    },

    mounted(){
        const socket = io('http://localhost:8080')

        socket.on('product-created', created => {
            this.products.push(created)
        })
    },

    async fetch(){
        try{
            this.waiting = true
            this.products = await this.$axios.$get('http://localhost:8080/products')
        }catch{
            alert('Ops! Parece que deu erro...')
        }finally{
            this.waiting = false
        }
    },

    methods: {
        async addProduct(){
            try{
                this.waiting = true
                const image = `~/assets/img/produtos/${upload.files[0].name}`
                const product = { title: this.title, price: this.price, description: this.description,
                    category: this.category, image: image }

                await this.$axios.$post(`http://localhost:8080/products`, product)
                this.title = ''
                this.price = ''
                this.category = ''
                this.description = ''
            }catch{
                alert('Erro ao cadastrar produto.')
            }finally{
                this.waiting = false
            }
        }
    }
}
</script>