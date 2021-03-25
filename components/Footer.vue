<template>
    <section id="footer">
    <footer class="bg-pink-200 py-4 text-center">
        <div class="flex justify-evenly content-start">
        <div>
            <h3>Serviços</h3>
            <ul>
            <li>2ª via de boleto</li>
            <li>Minha conta</li>
            <li>Trocas e devoluções</li>
            </ul>
        </div>
        <div>
            <h3>Institucional</h3>
            <ul>
            <li>Quem somos</li>
            <li>Trabalhe conosco</li>
            </ul>
        </div>
        <div>
            <h3>Formas de pagamento</h3>
            <ul class="flex justify-evenly">
            <li><img src="../assets/img/pay/mastercard.png" alt="Cartão Mastercard"></li>
            <li><img src="../assets/img/pay/visa.png" alt="Cartão Visa"></li>
            <li><img src="../assets/img/pay/elo.png" alt="Cartão Elo"></li>
            <li><img src="../assets/img/pay/boleto.png" alt="Boleto"></li>
            <li><img src="../assets/img/pay/pix.png" alt="Pix"></li>
            <li><img src="../assets/img/pay/paypal.png" alt="PayPal"></li>
            </ul>
        </div>
        <div>
            <h3>Siga-nos</h3>
            <ul class="flex justify-evenly">
            <li><a href="#" target="_blank"><img src="../assets/img/facebook.svg" alt="Facebook"></a></li>
            <li><a href="#" target="_blank"><img src="../assets/img/instagram.svg" alt="Instagram"></a></li>
            </ul>
        </div>
        </div>
    </footer>
    <p class="flex justify-center text-white p-3 text-lg tracking-wide">Romapel Papelaria <span class="text-xl">&reg;</span> Todos os direitos reservados</p>
    </section>
</template>

<style scoped>
h3, ul li{
    padding: .3rem;
}

h3{
    font-size: 1.4rem;
    letter-spacing: .1rem;
    padding-bottom: .5rem;
}

ul li{
    @apply text-base;
}

p{
    background-color: #ff3c77;
}

img{
    height: 3.5rem;
    width: auto;
}
</style>