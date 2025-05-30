<template>
    <div class="container">
        <div class="buttons">
            <button @click="voltar" class="botaoVoltar" style="left: 23px;"><img src="/public/setinha.png" alt=""></button>
            <button @click="carrinho" class="botao" style="right: 23px;"><img src="/public/carinhoo.png" alt=""></button>
        </div>
        <div class="card">
            <div class="car-image">
                <img src="/public/produtoTeste.png" alt="Fiat Argo" />
            </div>
            <div class="details">
                <div class="titulo">
                    <p>Carro McQueen</p>
                </div>
                <div class="precoConta">
                    <p class="price" style="letter-spacing: 1px; font-size: 25px;">R$200,00</p>
                    <div class="quantity">
                        <button @click="increase">+</button>
                        <span style="font-weight: bolder;">{{ quantity }}</span>
                        <button @click="decrease">−</button>
                    </div>
                </div>
                <div class="rating">
                    <img src="/public/estrela.png" alt="">
                    <span style="font-size: 20px;">4.5</span>
                    <span style="font-size: 12px; letter-spacing: 1px;">(500 reviews)</span>
                </div>
                <p class="description">
                    로렘 부르며, 출판이나 연출을 연출을 입숨은 로렘 사용할 디자인 채워지기 사용하는 문장 그래픽 때 그래픽 그래픽 같은 로렘 분야에서 입숨은 사용하는 로렘 시각 사용된다. 연출을
                    차지하는 보여줄 레이아웃 채움 무언가를 시각 결과물에 로렘 로렘 글로도 사용된다. 이런 결과물에 사용된다.

                    요소나 프로젝트 입숨은 용도로 사용된다. 때로 이용된다. 디자인 그래픽 로렘 같은 표준 모형의 입숨은 결과물에 채워지기 요소나 전에 텍스트로, 사용할 표준 보여줄 용어로도
                    사용된다. 내용이 지칭하는 출판이나 로렘 때 들어가는 시각적 입숨을 부르며, 같은 용어로도 용도로 전에 출판이나

                    같은 결과물에 용어로도 연출을 채움 이런 디자인 폰트, 공간만 레이아웃 들어가는 타이포그래피, 프로젝트 용어로도 용어로도 모형의 이런 사용된다. 차지하는 입숨은 디자인 그래픽 로렘
                    사용할 부르며, 무언가를 때로 때 디자인 시각 부르며, 디자인 디자인 때 그리킹이라고도 디자인 레이아웃


                </p>
                <div class="botaoAdd">
                    <button @click="alerta" class="add-button">ADICIONE À GARAGEM</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const quantity = ref(1)
const router = useRouter();

function increase() {
    quantity.value++
}
function decrease() {
    if (quantity.value > 1) quantity.value--
}

const voltar = () => {
  router.push("/home");
};
const carrinho = () => {
  router.push("/garagem");
};
const alerta = () => {
  alert("Produto adicionado à garagem!");
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    font-family: "Inter", sans-serif;
}

.container {
    height: 100vh;
    width: 100vw;
    background: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
}

.precoConta {
    display: flex;
    justify-content: space-between;
}

.car-image {
    width: 50vw;
    justify-content: center;
    display: flex;
}

.titulo {
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 25px;
    font-weight: bold;
}

.rating {
    display: flex;
    align-items: center;
}

.buttons button {
    width: 67px;
    height: 60px;
    background: #3C0B0B;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-size: 18px;
    position: absolute;
    top: 20px;
}

.card {
    background: white;
    display: flex;
    padding: 30px;
    border-radius: 32px;
    width: 80vw;
    height: 70vh;
}

.car-image img {
    width: 450px;
    object-fit: contain;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 40vw;
}

.rating span {
    margin-right: 15px;
}

.description {
    font-size: 17px;
    height: 50vh;
    overflow-y: auto;
    font-weight: 500;
}

.quantity {
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 18px;
}

.quantity button {
    background: white;
    border: none;
    border-radius: 8px;
    width: 35px;
    height: 35px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.add-button {
    background: #3C0B0B;
    color: white;
    padding: 30px;
    border: none;
    border-radius: 18px;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 2px;
}

.botaoAdd {
    display: flex;
    justify-content: center;
}

button {
    cursor: pointer;
}

@media only screen and (max-width: 800px) {
    .card {
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: 55vh;
        position: absolute;
        bottom: 0;
        padding: 2;
        border-radius: 5px;
    }

    .description {
        font-size: 12px;
    }

    .add-button {
        padding: 20px;
        font-size: 16px;
    }

    .titulo {
        font-weight: normal;
        font-size: 20px;
    }
    .description{
        height: 20vh;
    }
    .car-image img{
        width: 317px;
        position: absolute;
        top: -300px;
    }
    .details{
        width: 80vw;
    }
}
</style>