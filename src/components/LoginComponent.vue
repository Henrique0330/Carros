<template>
  <div class="pagina-login">
    <div class="fechar" @click="voltar">
      <img src="@/assets/fecharLogi.png" alt="Fechar" />
    </div>
    <div class="fundo">
      <div class="containerInterno">
        <p class="title">Faça o login</p>
        <p class="sub-title">Please fill your details to login.</p>
        <div class="conteudo">
          <div class="form-item">
            <input type="text" v-model="user.name" placeholder="Username/email" />
          </div>
          <div class="form-item">
            <input :type="showPassword ? 'text' : 'password'" v-model="user.senha" placeholder="Password" />
            <div class="eye" v-if="user.senha" @click="showPassword = !showPassword">
              <img src="@/assets/VerSenha.png" alt="Eye Icon" />
            </div>
          </div>
          <button class="login-button" @click="login">KATCHAU!</button>
          <p class="forgot-password" @click="openCadastroPage">forgot password?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
defineProps(["title"]);


const router = useRouter();
const showPassword = ref(false);


const user = reactive({
  name: "",
  senha: "",
});


const voltar = () => {
  router.push("/");
};

const openCadastroPage = () => {
  router.push('/cadastro')
}

const login = () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const encontrado = usuarios.find(
    u => (u.name === user.name || u.email === user.name) && u.senha === user.senha
  );

  if (encontrado) {
    alert("Login bem-sucedido!");
    localStorage.setItem("usuarioLogado", JSON.stringify(encontrado));
    router.push("/home");
  } else {
    alert("Usuário ou senha inválidos!");
  }
};

</script>


<style scoped>
.pagina-login {
  width: 100%;
  height: 100vh;
  background: url("/login.png") no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.fundo {
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 20px;
  padding: clamp(20px, 10vw, 60px);
}

.containerInterno {
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 3vw, 20px);
  color: white;
  text-align: center;
  margin: 20px 30px 0;
}

.title {
  font-size: clamp(18px, 2.5vw, 24px);
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: clamp(5px, 2vw, 20px);
}

.sub-title {
  margin-top: clamp(10px, 2vw, 20px);
  margin-bottom: clamp(8px, 2vw, 20px);
  font-size: clamp(9px, 1.5vw, 14px);
  font-family: sans-serif;
  font-weight: bold;
}

.conteudo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-item {
  width: 100%;
  position: relative;
  margin-bottom: clamp(10px, 2vw, 20px);
}

input {
  width: 100%;
  height: clamp(30px, 5vw, 40px);
  border-radius: clamp(8px, 1vw, 10px);
  border: none;
  padding-left: 10px;
  font-size: clamp(10px, 1.5vw, 14px);
}

.eye {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.eye img {
  width: clamp(15px, 2vw, 20px);
}

.login-button {
  width: 100%;
  height: clamp(30px, 5vw, 45px);
  background-color: #7b1212;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: clamp(14px, 2vw, 18px);
  margin-top: 10px;
  cursor: pointer;
}

.forgot-password {
  margin-top: clamp(5px, 2vw, 15px);
  font-size: clamp(6px, 1.5vw, 13px);
  text-decoration: underline;
  cursor: pointer;
  font-family: sans-serif;
}

.fechar {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #7b1212;
  border-radius: 50%;
  width: clamp(25px, 4vw, 35px);
  height: clamp(25px, 4vw, 35px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.fechar img {
  width: clamp(15px, 2.5vw, 20px);
  height: clamp(15px, 2.5vw, 20px);
  object-fit: contain;
}
</style>