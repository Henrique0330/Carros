<template>
    <div class="pagina-login">
        <div class="fechar" @click="voltar">
            <img src="@/assets/fecharLogi.png" alt="Fechar" />
        </div>

        <div class="fundo">
            <div class="containerInterno">
                <p class="title">Registrar-se</p>
                <p class="sub-title">Please fill your details to signup.</p>


                <div class="conteudo">
                    <div class="form-item">
                        <input type="text" v-model="user.name" placeholder="Username" />
                    </div>

                    <div class="form-item">
                        <input type="Email" v-model="user.email" placeholder="Email" />
                    </div>

                    <div class="form-item">
                        <input :type="showPassword ? 'text' : 'password'"
                        v-model="user.senha" 
                        placeholder="Password" />
                        <div class="eye" @click="showPassword = !showPassword">
                            <img src="@/assets/VerSenha.png" alt="Eye Icon" />
                        </div>
                    </div>

                    <div class="form-item">
                        <input type="password"
                        v-model="user.confirmarSenha"
                        placeholder="Confirmar Senha" />
                    </div>


                    <p v-if="user.confirmarSenha && user.senha !== user.confirmarSenha" style="color:red">As senhas
                        não são iguais!</p>

                    <button class="cadastro-button" :disabled="user.senha !== user.confirmarSenha"
                        @click="registrar">REGISTRAR-SE</button>

                    <p class="forgot-register" @click="openCadastroPage">Already a member? </p>
                    <p class="voltaLogin" @click="openLoginPage"> Signin</p>
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
    email: "",
    senha: "",
    confirmarSenha: "",
});


const voltar = () => {
    router.push("/telaInicial");
};

const openCadastroPage = () => {
    router.push('/cadastro')
}

const openLoginPage = () => {
    router.push('/login')
}

/* em baixo é para o local storege */

const registrar = () => {
  if (user.senha !== user.confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const existente = usuarios.find(u => u.email === user.email); 
  if (existente) {
    alert("Usuário já cadastrado!");
    return;
  }

  usuarios.push({
    name: user.name,
    email: user.email,
    senha: user.senha,
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Cadastro realizado com sucesso!");

  router.push("/login");
};

</script>


<style scoped>
.pagina-login {
    width: 100%;
    height: 100vh;
    background: url("/registrar.png") no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.fundo {
    background-color: rgba(0, 0, 0, 0.55);
    border-radius: 20px;
    padding: clamp(20px, 10vw, 55px);
}

.containerInterno {
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 3vw, 15px);
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

.cadastro-button {
    width: 100%;
    height: clamp(30px, 5vw, 45px);
    background-color: #7b1212;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: clamp(14px, 2vw, 16px);
    margin-top: 10px;
    cursor: pointer;
}

.forgot-register {
    margin-top: clamp(5px, 2vw, 15px);
    font-size: clamp(6px, 1.5vw, 13px);
    cursor: pointer;
    font-family: sans-serif;
    display: flex;
    flex-direction: row;
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

.voltaLogin {
    font-family: sans-serif;
    font-weight: bold;
    cursor: pointer;
    font-size: clamp(6px, 1.5vw, 13px);
    text-decoration: underline;
}
</style>