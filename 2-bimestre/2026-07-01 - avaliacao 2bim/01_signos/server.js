//server.js
const express = require("express");
const os = require("os");
const cors = require("cors");
const app = express();
const porta = 3000;
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"]
}));

const signos = [
    "Capricórnio",
    "Aquário",
    "Peixes",
    "Áries",
    "Touro",
    "Gêmeos",
    "Câncer",
    "Leão",
    "Virgem",
    "Libra",
    "Escorpião",
    "Sagitário"
];
const diasMudanca = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
//Os números armazenados nesse vetor representam o último dia em que o primeiro signo daquele mês ainda é válido.

function descobrirSignoComProblema(dia, mes) {
    if (dia > diasMudanca[mes - 1]) {
        return signos[(mes + 10) % 12];
    } else {
        return signos[(mes + 11) % 12];
    }
}

function descobrirSignoE(dia, mes) {
    if (dia >= diasMudanca[mes - 1]) {
        return signos[mes - 1];
    } else {
        if (mes === 1) {
            return signos[11];
        } else {
            return signos[mes - 2];
        }
    }

    //qual é o problema com essa?
}


function testarDescobrirSigno() {
    for (let mes = 1; mes <= 12; mes++) {
        for (let dia = 1; dia <= 31; dia++) {
            const signo = descobrirSignoE(dia, mes);
            console.log(`Dia: ${dia}, Mês: ${mes} => Signo: ${signo}`);
        }
    }
}



function descobrirSigno6(dia, mes) {
    let m = mes % 12;
    if (dia <= diasMudanca[m]) {
        return signos[m];
    }
    return signos[(m + 1) % 12];
}

function descobrirSigno1(dia, mes) {
    let m = (mes + 1) % 12;
    return (dia <= diasMudanca[m]) ? signos[m] : signos[(m + 1) % 12];
}

function descobrirSigno2(dia, mes) {
    let m = mes - 1;
    if (dia <= diasMudanca[m]) {
        return signos[m];
    }
    if (m == 11) {
        return signos[0];
    }
    return signos[m + 1];
}


function descobrirSigno3(dia, mes) {
    for (let i = 0; i < signos.length; i++) {
        if (mes == (i + 1)) {
            if (dia <= diasMudanca[i]) {
                return signos[i];
            }
            if (i == 11) {
                return signos[0];
            }
            return signos[i + 1];
        }
    }
    return "Data inválida";
}

function descobrirSigno4(dia, mes) {
    // Validação básica de mês
    if (mes < 1 || mes > 12) return "Data inválida";

    // Encontra o índice direto sem precisar de laço
    const i = mes - 1;

    if (dia <= diasMudanca[i]) {
        return signos[i];
    }
    if (i == 11) {
        return signos[0];
    }
    return signos[i + 1];
}



//versão minimalista e funcional, mas não tão legível quanto as anteriores
const descobrirSigno = (dia, mes) => (mes < 1 || mes > 12) ? "Data inválida" : dia <= diasMudanca[mes - 1] ? signos[mes - 1] : signos[mes % 12];

testarDescobrirSigno();

app.post("/signo", (req, res) => {
    const nome = req.body.nome;
    const dia = Number(req.body.dia);
    const mes = Number(req.body.mes);
    const signo = descobrirSigno(dia, mes);
    const pacoteResposta = {
        nome: nome.toUpperCase(), dia: dia, mes: mes, signo: signo
    };
    console.log(pacoteResposta);
    res.json(pacoteResposta);
});

function obterIP() {
    const interfaces = os.networkInterfaces();
    for (let nomeInterface in interfaces) {
        for (let info of interfaces[nomeInterface]) {
            if (info.family == "IPv4" && !info.internal) {
                return info.address;
            }
        }
    }
    return "localhost";
}
const ip = obterIP();

app.listen(porta, "0.0.0.0", () => {
    console.log(" SERVIDOR DE SIGNOS DO ZODÍACO ");
    console.log(`Servidor: http://${ip}:${porta}`);
    console.log("Aguardando requisições...");
});