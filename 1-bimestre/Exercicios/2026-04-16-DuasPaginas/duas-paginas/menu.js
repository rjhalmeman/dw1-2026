if(localStorage.getItem("logado") !== "true") {
    window.location.href = "login.html";
}

function sair() {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
}