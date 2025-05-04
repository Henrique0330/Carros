<script>
export default {
    data() {
        return {
            produtos: [
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                }, {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },
                {
                    titulo: "McQueen",
                    descricao: "Carros top para seu filho",
                    preco: 200.00,
                    imagem: "/relampago.png"
                },

            ]
        };
    }
};
</script>

<template>
    <div class="cards-container">
        <div class="card" v-for="(item, index) in produtos" :key="index">
            <img :src="item.imagem" alt="Imagem do produto" class="card-img">
            <div class="card-info">
                <h3 class="titulo">{{ item.titulo }}</h3>
                <p class="descricao">{{ item.descricao }}</p>
                <p class="preco">R${{ item.preco }}</p>
                <div class="texto">
                    <button class="comprar">comprar</button>
                    <button class="visualizar">visualizar</button>
                </div>
            </div>
        </div>
    </div>
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

.seta {
    width: 30px;
    height: 30px;
}

.carrinho {
    width: 30px;
    height: 30px;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.card {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.card-img {
    width: 90px;
    height: auto;
    margin-left: 20px;
}

.card-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-left: 30px;
}

.titulo {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
}

.descricao {
    font-size: 14px;
    color: #333;
    margin: 0;
}

.preco {
    font-weight: bold;
    letter-spacing: 1px;
    color: black;
    font-size: 16px;
    margin: 4px 0;
}

.comprar {
    background-color: #3C0B0B;
    width: 50%;
    height: 25px;
}

.visualizar {
    height: 25px;
    width: 4rem;
}

.texto {
    display: flex;
    gap: 5px;
}

@media (max-width: 1024px) {
    .card {
        flex-direction: column;
        align-items: center;
        width: 250px;
        text-align: center;
    }

    .card-img {
        margin: 10px 0;
        width: 120px;
        height: auto;
    }

    .card-info {
        margin-left: 0;
        align-items: center;
    }

    .texto {
        justify-content: center;
    }

    .comprar,
    .visualizar {
        width: 100px;
        font-size: 14px;
    }
}

@media (max-width: 600px) {
    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    .card {
        width: 45%;
        min-width: 130px;
        box-sizing: border-box;
        text-align: center;
    }

    .card-img {
        width: 80px;
        margin: 10px auto;
    }

    .titulo {
        font-size: 16px;
    }

    .descricao {
        font-size: 12px;
    }

    .preco {
        font-size: 14px;
    }

    .comprar,
    .visualizar {
        font-size: 12px;
        height: 28px;
        width: 70px;
    }

    .texto {
        display: flex;
        justify-content: center;
        gap: 5px;
    }
}

@media (max-width: 400px) {
    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    .card {
        width: 48%;
        min-width: 120px;
        box-sizing: border-box;
        text-align: center;
    }

    .card-img {
        width: 70px;
        margin: 8px auto;
    }

    .titulo {
        font-size: 14px;
    }

    .descricao {
        font-size: 11px;
    }

    .preco {
        font-size: 13px;
    }

    .texto {
        display: flex;
        justify-content: center;
        gap: 6px;
    }

    .comprar,
    .visualizar {
        width: 65px;
        height: 26px;
        font-size: 11px;
    }
}

@media (max-width: 300px) {
    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
    }

    .card {
        width: 95%;
        min-width: 100px;
        box-sizing: border-box;
        text-align: center;
    }

    .card-img {
        width: 60px;
        margin: 6px auto;
    }

    .titulo {
        font-size: 13px;
    }

    .descricao {
        font-size: 10px;
    }

    .preco {
        font-size: 12px;
    }

    .texto {
        justify-content: center;
        gap: 5px;
    }

    .comprar,
    .visualizar {
        width: 60px;
        height: 24px;
        font-size: 10px;
    }
}
</style>