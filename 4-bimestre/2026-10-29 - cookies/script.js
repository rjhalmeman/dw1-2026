// Credenciais de teste
const EMAIL_CORRETO = "admin@email.com";
const SENHA_CORRETA = "123456";

// Elementos da DOM
const telaLogin = document.getElementById("tela-login");
const telaDashboard = document.getElementById("tela-dashboard");
const formLogin = document.getElementById("form-login");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagem-erro");
const usuarioEmailSpan = document.getElementById("usuario-email");
const btnLogout = document.getElementById("btn-logout");

// --- FUNÇÕES DE COOKIE (JavaScript Puro) ---

// Função para salvar o cookie
function setCookie(nome, valor, dias) {
  const data = new Date();
  data.setTime(data.getTime() + dias * 24 * 60 * 60 * 1000);
  const expira = "expires=" + data.toUTCString();
  document.cookie = `${nome}=${valor}; ${expira}; path=/; SameSite=Lax`;
}

// Função para ler um cookie
function getCookie(nome) {
  const nomeEQ = nome + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nomeEQ) === 0) return c.substring(nomeEQ.length, c.length);
  }
  return null;
}

// Função para apagar um cookie
function deleteCookie(nome) {
  document.cookie = `${nome}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// --- CONTROLE DE INTERFACE ---

// Verifica se o usuário já tem o cookie ao carregar a página
function verificarSessao() {
  const emailSalvo = getCookie("usuario_sessao");

  if (emailSalvo) {
    // Exibe tela do dashboard
    usuarioEmailSpan.textContent = emailSalvo;
    telaLogin.classList.add("esconde");
    telaDashboard.classList.remove("esconde");
  } else {
    // Exibe tela de login
    telaLogin.classList.remove("esconde");
    telaDashboard.classList.add("esconde");
  }
}

// Processa o evento de login
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = inputEmail.value;
  const senha = inputSenha.value;

  if (email === EMAIL_CORRETO && senha === SENHA_CORRETA) {
    mensagemErro.textContent = "";
    // Cria o cookie que dura 1 dia
    setCookie("usuario_sessao", email, 1);
    verificarSessao();
  } else {
    mensagemErro.textContent = "E-mail ou senha incorretos!";
  }
});

// Processa o logout
btnLogout.addEventListener("click", () => {
  deleteCookie("usuario_sessao");
  inputEmail.value = "";
  inputSenha.value = "";
  verificarSessao();
});

// Executa ao abrir o arquivo
verificarSessao();