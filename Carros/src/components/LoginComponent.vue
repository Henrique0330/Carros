<template>
    <div :class="['modal', showModal ? 'visible' : 'hidden']" @click.self="closeModal">
      <div class="form-container">
        <div class="fechar" @click="closeModal">
            <img src="@/assets/fecharLogi.png" alt="Fechar" />
        </div>
  
        <div class="containerInterno">
          <p class="title">Faça o login</p>
          <p class="sub-title">Please fill your details to login.</p>
  
          <div class="conteudo">
            <div class="form-item">
              <input type="text" v-model="user.name" placeholder="Username/email" />
            </div>
  
            <div class="form-item">
              <input :type="showPassword ? 'text' : 'password'" v-model="user.senha" placeholder="Password" />
              <span class="eye" @click="showPassword = !showPassword">
                <img src="@/assets/imgLogin.png" alt="Eye Icon" />
              </span>
            </div>
  
            <button class="login-button" @click="closeModal">KATCHAU!</button>
  
            <p class="forgot-password">forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script setup>
import { reactive, ref, defineExpose } from 'vue'

defineProps(['title'])

const showModal = ref(false)
const showPassword = ref(false)

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

defineExpose({
  openModal,
  closeModal
})
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  filter: blur();
}

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease;
}

.form-container {
  width: 380px;
  min-height: 550px;
  background: url('@/assets/imgLogin.png') no-repeat center/cover; 
  border-radius: 20px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.containerInterno {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  color: rgb(255, 255, 255);
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.sub-title {
  font-size: 14px;
  margin-bottom: 20px;
}

.conteudo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-item {
  width: 100%;
  position: relative;
  margin-bottom: 20px;
}

input {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  font-size: 14px;
}

.eye {
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
}

.eye img {
  width: 0
}

.login-button {
  width: 100%;
  height: 45px;
  background-color: #7B1212;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
}

.forgot-password {
  margin-top: 15px;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
}

.fechar {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #7B1212;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.fechar img{
  width: 20px;
  height: 20px;
  object-fit: contain;
  font-weight: bold;
}
</style>
