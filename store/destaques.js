export const state = () => ({
    destaques: [
        {nome: 'Organização',        imagem: require('~/assets/img/categorias/organizacao.jpg')},
        {nome: 'Escrita',            imagem: require('~/assets/img/categorias/escrita.jpg')},
        {nome: 'Planners e Agendas', imagem: require('~/assets/img/categorias/planners.jpg')},
        {nome: 'Mochilas',           imagem: require('~/assets/img/categorias/mochilas.jpg')},
        {nome: 'Estojos',            imagem: require('~/assets/img/categorias/estojos.jpg')},
        {nome: 'Pintura',            imagem: require('~/assets/img/categorias/pintura.jpg')},
    ]
})

export const mutations = {
    addDestaque(state, destaque){
        state.destaques.push(destaque)
    }
}