<script setup>
import ListaProdutosView from '@/views/ListaProdutosView.vue';
</script>
<template>
    <nav class="navbar-desktop">
        <img class="logo" src="/logo.png" alt="">
        <div class="icons">
            <a href=""><img class="user-img" src="/user.png" alt=""></a>
            <a href=""><img class="cart-img" src="/shopping-cart.png" alt=""></a>
        </div>
    </nav>
    <nav class="navbar-mobile">
        <div class="conteudo-nav">
            <a href=""><img src="/user.png" class="user-img-mobile" alt=""></a>
            <img src="/logo.png" class="logo-mobile" alt="">
            <a href="" ><img class="cart-img-mobile" src="/shopping-cart.png" alt=""></a>
        </div>
    </nav>
    <div class="container">
        <div class="content-card">
            <div class="card">
                <h1>Veja todos os produtos McStore!</h1>
                <button class="ver-mais">VER MAIS!</button>
            </div>
        </div>
        <h1 class="texto-categorias">Categorias</h1>
        <div class="categorias">
            <div id="brinquedos" class="itens">
                <h1>BRINQUEDOS</h1>
            </div>
            <div id="roupas" class="itens">
                <h1>ROUPAS</h1>
            </div>
            <div id="pistas" class="itens">
                <h1>PISTAS</h1>
            </div>
            <div id="acessorios" class="itens">
                <h1>ACESSÓRIOS</h1>
            </div>
        </div>
    </div>
    <ListaProdutosView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.container {
    width: 100%;
    height: 100%;

}

.content-card {
    display: flex;
    justify-content: center;
}

.navbar-mobile {
    width: 100%;
    height: 105px;
    display: none;
    background-color: white;
}

.cart-img-mobile,
.user-img-mobile {
    width: 40px;
    height: 40px;
}

.logo-mobile {
    width: 100px;
    height: 100px;
}

.conteudo-nav {
    align-items: center;
}

.navbar-desktop {
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    background-color: white;
}

.logo {
    height: 130px;
    width: 130px;
    margin-left: 68px;
}

.icons {
    margin-left: 72.9%;
}

.cart-img {
    margin-left: 30px;
}

.card {
    width: 1100px;
    height: 488px;
    background-image: url(/card-all.png);
    border-radius: 32px;
    margin-top: 30px;
    background-size: cover;
}

.card>h1 {
    font-size: 50px;
    font-weight: bolder;
    color: white;
    margin-top: 122px;
    width: 521px;
    margin-left: 9%;
    margin-right: 717px;
}

.ver-mais {
    width: 200px;
    height: 75px;
    font-size: 20px;
    border-radius: 18px;
    margin-left: 74%;
    margin-top: 5.5%;
    background-color: #4A1010;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
}

.ver-mais:hover {
    background-color: #260909;
}

.texto-categorias {
    color: black;
    font-size: 50px;
    margin: 61px 0;
    text-align: center;
    font-weight: 500;
}

.categorias {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 37.9px;
}

.itens {
    width: 520px;
    height: 490px;
    border-radius: 25px;
    cursor: pointer;
}

#brinquedos {
    background-image: url(/mioamigoPC.png);
    background-size: cover;
    background-position: center;
}

#roupas {
    background-image: url(/roupas-categoria.png);
    background-size: cover;
    background-position: center;
}

#pistas {
    background-image: url(/pistas-categorias.png);
    background-size: cover;
    background-position: center;
    margin-bottom: 10px;
}

#acessorios {
    background-image: url(/acessorios-categorias.png);
    background-size: cover;
    background-position: center;
    margin-bottom: 10px;
}

.itens>h1 {
    color: white;
    text-align: center;
    font-weight: bolder;
    margin-top: 75%;
    font-size: 30px;
}

@media (max-width: 1425px) {
    .navbar-desktop {
        display: flex;
    }

    .icons {
        margin-left: 70%;
    }

    .ver-mais {
        width: 200px;
        height: 75px;
        font-size: 21px;
        border-radius: 15px;
        margin-left: 78%;
        margin-top: 5%;
    }

    .card {
        width: 1050px;
        height: 440px;
    }

    .card>h1 {
        width: 500px;
        font-size: 55px;
        margin-top: 80px;
    }

    .categorias {
        gap: 80px 80px;
    }


    .texto-categorias {
        font-size: 60px;
        text-align: center;
    }
}

@media (max-width: 1180px) {
    .navbar-desktop {
        display: none;
    }

    .navbar-mobile {
        display: block;
    }

    .conteudo-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto 32px;
    }

    .ver-mais {
        width: 185px;
        height: 65px;
        font-size: 18px;
        border-radius: 12px;
        margin-left: 71%;
        margin-top: 10%;
    }

    .card {
        width: 980px;
        height: 400px;
    }

    .card>h1 {
        width: 390px;
        font-size: 40px;
        margin-top: 80px;
    }

    .categorias {
        gap: 50px 63px;
    }

    .itens {
        width: 460px;
        height: 550px;
    }

    .itens>h1 {
        font-size: 35px;
        margin-top: 440px;
    }

    .texto-categorias {
        font-size: 50px;
    }
}

@media (max-width: 1040px) {
    .navbar-desktop {
        display: none;
    }

    .navbar-mobile {
        display: block;
    }

    .conteudo-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto 32px;
    }

    .ver-mais {
        width: 185px;
        height: 65px;
        font-size: 18px;
        border-radius: 12px;
        margin-left: 71%;
        margin-top: 10%;
    }

    .card {
        width: 900px;
        height: 400px;
    }

    .card>h1 {
        width: 390px;
        font-size: 40px;
        margin-top: 80px;
    }

    .categorias {
        gap: 50px 63px;
    }

    .itens {
        width: 410px;
        height: 550px;
    }

    .itens>h1 {
        font-size: 35px;
        margin-top: 440px;
    }

}

@media (max-width: 1010px) {
    .navbar-desktop {
        display: none;
    }

    .navbar-mobile {
        display: block;
    }

    .conteudo-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto 32px;
    }

    .ver-mais {
        width: 185px;
        height: 65px;
        font-size: 18px;
        border-radius: 10px;
        margin-left: 71%;
        margin-top: 7%;
    }

    .card {
        width: 850px;
        height: 340px;
    }

    .card>h1 {
        width: 270px;
        font-size: 30px;
        margin-top: 70px;
        margin-left: 7%;
    }

    .categorias {
        gap: 35px 53px;
    }

    .itens {
        width: 395px;
        height: 455px;
    }

    .itens>h1 {
        font-size: 27px;
        margin-top: 360px;
    }

    .texto-categorias {
        font-size: 40px;
    }
}

@media (max-width: 900px) {
    .navbar-desktop {
        display: none;
    }

    .navbar-mobile {
        display: block;
    }

    .conteudo-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto 32px;
    }

    .ver-mais {
        width: 165px;
        height: 60px;
        font-size: 17px;
        border-radius: 10px;
        margin-left: 71%;
        margin-top: 6%;
    }

    .card {
        width: 690px;
        height: 310px;
    }

    .card>h1 {
        width: 270px;
        font-size: 30px;
        margin-top: 70px;
        margin-left: 7%;
    }

    .categorias {
        gap: 35px 53px;
    }

    .itens {
        width: 310px;
        height: 370px;
    }

    .itens>h1 {
        font-size: 23px;
        margin-top: 290px;
    }
}

@media (max-width: 750px) {
    .navbar-desktop {
        display: none;
    }

    .navbar-mobile {
        display: block;
    }

    .conteudo-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto 32px;
    }

    .ver-mais {
        width: 150px;
        height: 50px;
        font-size: 16px;
        border-radius: 10px;
        margin-left: 70%;
    }

    .card {
        width: 580px;
        height: 250px;
    }

    .card>h1 {
        width: 220px;
        font-size: 24px;
        margin-top: 35px;
    }

    .categorias {
        gap: 30px 47px;
    }

    .itens {
        width: 260px;
        height: 310px;
    }

    .itens>h1 {
        font-size: 17px;
        margin-top: 250px;
    }

    .texto-categorias {
        font-size: 32px;
        margin-top: 28px;
        margin-bottom: 28px;
    }
}

@media (max-width: 625px) {
    .navbar-desktop {
        display: none;
    }

    .navbar-mobile {
        display: block;
    }

    .conteudo-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto 32px;
    }

    .ver-mais {
        width: 150px;
        height: 50px;
        font-size: 16px;
        border-radius: 10px;
        margin-left: 60%;
    }

    .card {
        width: 500px;
        height: 235px;
        border-radius: 18px;
    }

    .card>h1 {
        width: 220px;
        font-size: 24px;
        margin-top: 35px;
    }

    .categorias {
        gap: 30px 47px;
    }

    .itens {
        width: 220px;
        height: 260px;
    }

    .itens>h1 {
        font-size: 17px;
        margin-top: 200px;
    }
}

@media (max-width: 500px) {
    .navbar-desktop {
        display: none;
    }

    .navbar-mobile {
        display: block;
    }

    .conteudo-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto 32px;
    }

    .ver-mais {
        width: 125px;
        height: 40px;
        font-size: 15px;
        border-radius: 10px;
        margin-left: 56%;
    }

    .card {
        width: 365px;
        height: 186px;
    }

    .card>h1 {
        width: 220px;
        font-size: 21px;
        margin-top: 40px;
    }

    .categorias {
        gap: 30px 35px;
    }

    .itens {
        width: 170px;
        height: 222px;
        border-radius: 25px;
    }

    #brinquedos {
        background-size: 170px 215px;
    }

    #roupas {
        background-size: 190px 222px;
    }

    #pistas {
        background-size: 180px 215px;
    }

    #acessorios {
        background-size: 170px 215px;
    }

    .itens>h1 {
        font-size: 15px;
        margin-top: 176px;
    }

    .texto-categorias {
        font-size: 32px;
        margin-top: 31px;
        margin-bottom: 31px;
    }
}
</style>