<script setup></script>

<template>
    <header>
        <div class="container">
            <div class="ButtomSeta">
                <button><img class="seta" src="/seta.png" alt=""></button>
            </div>
            <img src="/McStore.png" alt="logo">
            <div class="ButtomCarrinho">
                <button><img class="carrinho" src="/carrinho.png" alt=""></button>
            </div>
        </div>
    </header>
</template>

<style scoped>
body {
    background-color: #ffffff;
}

header {
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

button {
    background-color: #3C0B0B;
    color: white;
    height: 50px;
    width: 60px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

img {
    width: 90px;
    height: 90px;
}

.container {
    display: flex;
    gap: 38%;
    justify-content: center;
}

.ButtomCarrinho {
    align-content: center;
}

.ButtomSeta {
    align-content: center;
}

.seta{
    width: 30px;
    height: 30px;
}

.carrinho{
    width: 30px;
    height: 30px;
}

</style>