<template>
    <section id="cards" class="my-10">
        <h2 class="text-center text-5xl p-8">Nossos Produtos</h2>
        <div id="container" class="flex justify-between flex-wrap">
            <div class="max-w-xs rounded overflow-hidden shadow m-5 zoom-out">
                <img src="../assets/img/cat/01-organizacao.jpg" alt="Organização" />
                <div class="px-8 py-7">
                    <p>Organização</p>
                </div>
            </div>

            <div class="max-w-xs rounded overflow-hidden shadow m-5 zoom-out">
                <img src="../assets/img/cat/07-escrita.jpg" alt="Escrita" />
                <div class="px-8 py-7">
                    <p>Escrita</p>
                </div>
            </div>

            <div class="max-w-xs rounded overflow-hidden shadow m-5 zoom-out">
                <img src="../assets/img/cat/05-planners.jpg" alt="Planners e Agendas" />
                <div class="px-8 py-7">
                    <p>Planners e Agendas</p>
                </div>
            </div>

            <div class="max-w-xs rounded overflow-hidden shadow m-5 zoom-out">
                <img src="../assets/img/cat/02-mochilas.jpg" alt="Mochilas" />
                <div class="px-8 py-7">
                    <p>Mochilas</p>
                </div>
            </div>

            <div class="max-w-xs rounded overflow-hidden shadow m-5 zoom-out">
                <img src="../assets/img/cat/04-estojos.jpg" alt="Estojos" />
                <div class="px-8 py-7">
                    <p>Estojos</p>
                </div>
            </div>

            <div class="max-w-xs rounded overflow-hidden shadow m-5 zoom-out">
                <img src="../assets/img/cat/06-pintura.jpg" alt="Pintura" />
                <div class="px-8 py-7">
                    <p>Pintura</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#container{
    max-width: 55vw;
    margin: 0 auto;
}

.zoom-out:hover{
    cursor: pointer;
    transform: scale(1.05);
}

img{
    height: 16rem;
}

p{
    padding: 1.2rem;
    font-size: 1.5rem;
    text-align: center;
}
</style>