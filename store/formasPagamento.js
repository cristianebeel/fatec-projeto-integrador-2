export const state = () => ({
    formasPagamento: [
        {titulo: 'Boleto Bancário', imagem: require('~/assets/img/formas-de-pagamento/boleto.png')},
        {titulo: 'Cartão Mastercard', imagem: require('~/assets/img/formas-de-pagamento/mastercard.png')},
        {titulo: 'Cartão Visa', imagem: require('~/assets/img/formas-de-pagamento/visa.png')},
        {titulo: 'Cartão Elo', imagem: require('~/assets/img/formas-de-pagamento/elo.png')},
        {titulo: 'PayPal', imagem: require('~/assets/img/formas-de-pagamento/paypal.png')},
        {titulo: 'Pix', imagem: require('~/assets/img/formas-de-pagamento/pix.png')}
    ]
})