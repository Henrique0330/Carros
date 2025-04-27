<script setup>
</script>

<template>
    <div class="background-image"></div>
    <div class="container">
        <img class="logo" src="/McStore.png" alt="logo">
        <div class="text">
            <p>Read more and stress less with our online book shopping app. Shop from anywhere you are and discover
                titles that you love. Happy reading!</p>
        </div>
    </div>
    <div class="buttom">
        <div class="login">
            <button class="buttomLogin">Faça o login!</button>
        </div>
        <span>|</span>
        <div class="register">
            <button class="buttomRegister">Registrar-se!</button>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.background-image {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url('/TelaFundo.jpg');
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: brightness(0.3);
}

.buttom {
    display: flex;
    justify-content: center;
    margin-top: 36rem;
    gap: 5rem;
}

.login,
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 45px;
    border-radius: 10px;
    cursor: pointer;
}

.login {
    background-color: #4A1010;
}

.register {
    background-color: white;
}

.buttomLogin {
    background-color: #4A1010;
    color: white;
    border: none;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    cursor: pointer;
}

.buttomRegister {
    background-color: white;
    border: none;
    color: #121212;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    cursor: pointer;
}

img {
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15rem;
    height: 15rem;
}

.text {
    position: absolute;
    top: 43%;
    width: 50%;
    left: 26%;
    color: white;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
}

span {
    color: white;
    font-size: 40px;
    border-radius: 10px ;
}

/* Responsividade */
@media (max-width: 768px) {
    .buttom {
        margin-top: 19rem;
        gap: 2rem;
        flex-direction: column;
        left: 15%;
        align-items: center;
    }

    .login,
    .register {
        width: 60%;
        height: 49px;
    }

    img {
        margin-top: 2rem;
        width: 13rem;
        height: 13rem;
    }

    .text {
        top: 75%;
        left: 15%;
        width: 70%;
        font-size: 16px;
        text-align: center;
    }

    span {
    display: none;
    }
}

@media (max-width: 500px) {
    .buttom {
        margin-top: 19rem;
        gap: 1.5rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .login,
    .register {
        width: 63%;
        height: 42px;
    }

    img {
        margin-top: 3rem;
        width: 12rem;
        height: 12rem;
    }

    .text {
        top: 70%;
        /* Mudei o valor de "top" para deslocar o texto para baixo */
        left: 10%;
        width: 80%;
        font-size: 14px;
        text-align: center;
    }
}


@media (max-width: 400px) {
    .buttom {
        gap: 1.5rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 50px;

    }

    .login,
    .register {
        width: 70%;
        height: 40px;
        align-items: center;
        justify-content: center;

    }

    .buttomLogin {
        font-size: 17.5px;
    }

    .buttomRegister {
        font-size: 17.5px;
    }

    img {
        margin-top: 2rem;
        width: 10.5rem;
        height: 10.5rem;
    }

    .text {
        top: 66%;
        /* Mudei o valor de "top" para deslocar o texto para baixo */
        left: 10%;
        width: 80%;
        font-size: 14px;
        text-align: center;
    }
}
</style>
