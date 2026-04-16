function Verifica() {
    let user = document.getElementById("InputUser").value;
    let pass = document.getElementById("InputSenha").value;

    if(user === "admin" && pass === "123") {
        localStorage.setItem("logado", "true");

        // muda de página
        window.location.href = "menu.html";
    } else {
        alert("Login inválido!");
    }
}