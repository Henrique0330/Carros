<template>
    <nav>
        <div class="back-button">
            <img src="/BackIcon.png" alt="" class="back-img">
        </div>
        <h1 class="text-garagem">Minha Garagem</h1>
    </nav>
    <div class="card">
        <div class="itens-cima">
            <input type="checkbox" name="" id="">
            <div class="img-carro">
                <img src="/carro-garagem.png" alt="">
            </div>
            <div class="descricao">
                <h1 class="text-product">Carro Mcqueen</h1>
                <div class="info-extra">
                    <p><strong>Unidades:</strong> 2</p>
                    <p><strong>Preço:</strong> R$ 200,00</p>
                </div>
            </div>
            <img class="img-lixeira" src="/lixeira-icon.png" alt="">
        </div>
    </div>
    <div class="comprar">
        <button>COMPRAR</button>
        <p>Preço:200,00</p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
*{
    font-family: "Open Sans", sans-serif;
}
nav {
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 146px;
}

.back-button {
    position: absolute;
    left: 20px;
    display: flex;
    width: 60px;
    height: 56px;
    background-color: #3C0B0B;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    cursor: pointer;
}

.text-garagem {
    font-size: 50px;
    font-weight: 500;
}

.card {
    width: 86%;
    background-color: white;
    margin: 20px auto;
    border-radius: 32px;
    height: 140px;
}

.itens-cima {
    display: flex;
}

.itens-cima>img {
    width: 37px;
    height: 37px;
    margin-left: 15rem;
    margin-top: 1.5rem;
    cursor: pointer;
}

input {
    margin-left: 1rem;
    margin-top: 1.6rem;
    height: 30px;
    width: 30px;
    border-radius: 17px;
    cursor: pointer;
}

.img-carro {
    margin-left: 1.6rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
}

.descricao {
    flex-direction: column;
    margin-left: 5.75rem;
    width: 609px;
    margin-top: 1.3rem;
}
.descricao > h1{
    font-weight: 500;
    font-size: 30px;
}
.info-extra {
    display: flex;
    gap: 4rem;
    margin-top: 10px;
}

.info-extra p {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
}
.comprar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    gap: 5.5rem;
    align-items: center;
    padding: 1rem 0;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    height: 6rem;
    height: 150px;
}
.comprar > button{
    width: 16rem;
    height: 4.3rem;
    border-radius: 20px;
    border: none;
    background-color: #4A1010;
    color: white;
    font-size: 20px;
}
.comprar > p{
    font-size: 20px;
}
@media (max-width: 1440px){
    .itens-cima>img{
        margin-left: 10rem;
    }
}
@media (max-width: 1330px){
    .itens-cima>img{
        margin-left: 5rem;
    }
}
@media (max-width: 1130px){
    .itens-cima>img{
        margin-left: 1rem;
    }
    .descricao {
    width: 500px;
}
}
@media (max-width: 1130px){
    .card {
    width: 100%;
    border-radius: 0;
}
.itens-cima>img{
        margin-left: 5rem;
    }
}
@media (max-width: 954px){
    .descricao {
        width: 400px;
}
}
@media (max-width: 856px){
    .descricao{
        width: 300px;
    }
    .info-extra{
        gap: 1.5rem;
    }
    .info-extra p {
    font-size: 17px;
    font-weight: 400;
}
}
@media (max-width: 752px){
    .descricao{
        width: 310px;
        margin-left: 5rem;

    }
    .info-extra p {
    font-size: 20px;
}
.itens-cima>img{
        margin-left: 2rem;
    }
    .text-garagem {
    font-size: 40px;
}
.back-button {
    width: 55px;
    height: 51px;
}
.back-img{
    width: 25px;
    height: 25px;
}
.comprar>button{
    width: 168px;
    height: 68px;
    font-size: 16px;
    font-weight: bold;
}
}
@media (max-width: 691px){
    .info-extra p {
    font-size: 18px;
}
.descricao{
    margin-left: 3.5rem;
}
.itens-cima>img{
        margin-left: 1rem;
    }
}
@media (max-width: 625px){
    .img-carro{
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }
    .img-carro > img{
        width: 100px;
        height: 75px;
    }
    .descricao > h1{
        font-size: 20px;
    }
    .descricao{
        margin-top: 1rem;
        width: 290px;
        margin-left: 2rem;
    }
    .itens-cima>img {
        margin-top: 1.5rem;
    }
    .text-garagem{
        margin-left: 117px;
    }
   .back-button{
    margin-left: 22px;
   }
}
@media (max-width: 540px){
    .itens-cima>img {
       width: 33px;
       height: 33px;
       margin-left: 0.5rem;
    }
    input{
        width: 33px;
        height: 33px;
    }
    .descricao{
        width: 250px;
    }
    .info-extra > p{
        font-size: 15px;
    }
   
}
@media (max-width: 480px){
    .back-button{
    margin-left: 5px;
   }
   .text-garagem{
        margin-left:100px;
    }
    .descricao{
        margin-left: 1rem;
    }
    .itens-cima > img{
        margin-left: 0.5rem;
    }
    input{
        margin-top: 1.5rem;
        width: 25px;
        height: 25px;
        margin-left: 0.5rem;
    }
    .img-carro{
        margin-left: 0.4rem;
    }
}
</style>
