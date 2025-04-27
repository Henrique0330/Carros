<script setup>
</script>
<template>
        <nav>
            <img class="logo" src="/logo.png" alt="">
            <div class="icons">
                <a href=""><img class="user-img" src="/user.png" alt=""></a>
                <a href=""><img class="cart-img" src="/shopping-cart.png" alt=""></a>
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
                    <div id="brinquedos" class="itens"><h1>BRINQUEDOS</h1></div>
                    <div id="roupas" class="itens"><h1>ROUPAS</h1></div>
                    <div id="pistas" class="itens"><h1>PISTAS</h1></div>
                    <div id="acessorios" class="itens"><h1>ACESSÓRIOS</h1></div>
                </div>
        </div>
</template>

<style scoped>

.container {
    width: 100%;
    height: 100%;
    
}
.content-card{
    display: flex;
    justify-content: center;
}

nav {
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
.icons{
    margin-left: 1075px;
}
.cart-img{
    margin-left: 55px;
}
.card{
    width: 1360px;
    height: 488px;
    background-image: url(/card-all.png);
    border-radius: 32px;
    margin-top: 23px;
}
.card > h1{
    font-size: 50px;
    font-weight: bolder;
    color: white;
    margin-top: 122px;
    width: 521px;
    margin-left: 122px;
    margin-right: 717px;
}
.ver-mais{
    width: 271px;
    height: 90px;
    font-size: 25px;
    border-radius: 18px;
    margin-left: 1015px;
    margin-top: 50px;
    background-color: #4A1010;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
.ver-mais:hover{
    background-color: #260909;
}
.texto-categorias{
    color: black;
    font-size: 60px;
    margin-top: 66px;
    margin-bottom: 66px;
    margin-left: 90px;
    font-weight: 500;
}
.categorias{
    display: grid;
    grid-template-columns: 635px 635px;
    grid-template-rows: 650px 650px;
    justify-content: center;
    gap: 84px 90px;
}
.itens{
    width: 635px;
    border-radius: 32px;
}
#brinquedos{
    background-image: url(/mioamigoPC.png);
}
#roupas{
    background-image: url(/roupas-categoria.png);
}
#pistas{
    background-image: url(/pistas-categorias.png);
}
#acessorios{
    background-image: url(/acessorios-categorias.png);
}
.itens > h1{
    color: white;
    text-align: center;
    font-weight: bolder;
    margin-top: 507px;
    font-size: 60px;
}

</style>