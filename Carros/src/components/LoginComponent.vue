<template>
  <div class="pagina-login">
      <div class="fechar" @click="voltar">
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
            <div class="eye" @click="showPassword = !showPassword">
              <img src="@/assets/VerSenha.png" alt="Eye Icon" />
            </div>
          </div>

          <button class="login-button" @click="voltar">KATCHAU!</button>

          <p class="forgot-password">forgot password?</p>
        </div>
      </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps(['title'])

const router = useRouter()
const showPassword = ref(false)

const user = reactive({
  name: '',
  senha: ''
})

const voltar = () => {
  router.push('/')
}
</script>

<style scoped>
.pagina-login {
  width: 100%;
  height: 100vh;
  background: url('@/assets/imgLogin.png') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.containerInterno {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  gap: 10px;
  color: white;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.sub-title {
  margin-top: 20px;
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
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.eye img {
  width: 20px;
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

.fechar img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style>
