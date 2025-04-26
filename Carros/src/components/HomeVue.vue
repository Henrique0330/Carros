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
            <div class="content">
                <div class="card-all">
                    <h1>Veja todos os produtos McStore!</h1>
                    <button class="ver-mais">VER MAIS!</button>
                </div>
            </div>
        </div>
</template>

<style scoped>

.container {
    width: 1440px;
    height: 1040;
}
.content{
    width: 100%;
    height: 100%;
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
    margin-left: 1002px;
}
.cart-img{
    margin-left: 55px;
}
.card-all{
    width: 1360px;
    height: 488px;
    background-image: url(/card-all.png);
    border-radius: 32px;
    margin-top: 23px;
}
.card-all > h1{
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

</style>