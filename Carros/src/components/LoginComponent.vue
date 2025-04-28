
<script setup>
import { reactive, ref } from 'vue'
defineProps(['title'])
const showModal = ref(false)

const user = reactive({
    name: '',
    senha: '',
})

const closeModal = () => {
    showModal.value = false
}

const openModal = () => {
    showModal.value = true
}
</script>



<template>
   <button class="Modal" @click="openModal">Abrir Modal</button>


   <div :class="['modal', showModal ? 'visible' : 'hidden']">
       <div class="form-container">
           <div class="fechar">
               <span class="fa fa-x" @click="closeModal"></span>
           </div>
           <div class="containerInterno">
               <div class="logoLogin">
                   <img class="imgLogin" src="" alt="Logo" />
               </div>


               <p class="title">Faça o Login</p>
               <p class="sub-title">please fill your details to login</p>
               <h1 class="title" id="dynamic-title">{{ title }}</h1>


               <div class="conteudo">
                   <div class="form-item">
                       <label for="name">Nome</label>
                       <input type="text" name="name" id="name" v-model="user.name" placeholder="Nome/Email" />
                   </div>




                   <div class="form-item">
                       <label for="senha">Senha</label>
                       <input type="password" name="senha" id="senha" v-model="user.senha" placeholder="Password" />
                   </div>


                   <button>Katchau</button>
                   <div class="termo">
                      
                       <p class="textoFinal">Forgot password <a class="link" href="">Entrar</a></p>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: visibility 0.3s, opacity 0.3s;
}

.hidden {
    visibility: hidden;
    opacity: 0;
}

.visible {
    visibility: visible;
    opacity: 1;
}

.form-container {
    width: 460px;
    height: 850px;
    border-radius: 25px;
    background-color: #f2f2f2;
    margin: auto;
    margin-bottom: 50px;
    font-family: 'Montserrat';
    position: relative;
    z-index: 1001;
}

.containerInterno {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: -2rem;
}


.title {
    text-align: center;
    font-size: 23px;
    font-family: 'Montserrat';
    font-weight: bold;
    margin-top: 10px;
}

.sub-title {
    text-align: center;
    margin-top: 10px;
    font-family: 'Montserrat';
    font-size: 18px;
}

.form-item {
    display: grid;
    grid-auto-columns: auto;
    margin-top: 5px;
}

input {
    width: 250px;
    height: 35px;
    border-radius: 15px;
    border: solid 1px rgba(79, 79, 79, 1);
    background-color: #f2f2f2;
    margin-bottom: 5px;
    padding: 0 10px;
    outline: none;
}


button {
    padding: 13px 100px;
    border-radius: 25px;
    margin-top: 15px;
    border: none;
    color: #f2f2f2;
    font-weight: bold;
    font-size: 15px;
}

.fechar {
    padding: 25px;
    display: flex;
    justify-content: flex-end;
}

.fechar:hover {
    cursor: pointer;
}


label {
    margin-left: 10px;
    color: black;
    font-size: 12px;
    font-weight: 500;
}
</style>
