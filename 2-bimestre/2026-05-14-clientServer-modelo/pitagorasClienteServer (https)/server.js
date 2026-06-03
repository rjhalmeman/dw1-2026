const express = require('express');
const os = require('os');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

// Lê os certificados SSL obrigatórios para criar um servidor HTTPS
// Certifique-se de que os arquivos key.pem e cert.pem estão no mesmo diretório
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir qualquer origem
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Rota POST para receber os catetos, calcular a hipotenusa e retornar o resultado ao cliente
app.post('/calcular-hipotenusa', (req, res) => {
    // Utilizando destructuring para capturar os dados do corpo da requisição de forma limpa
    const { x, y } = req.body;

    console.log(`As coordenadas recebidas foram: (${x}, ${y})`);

    // Realiza o cálculo de Pitágoras usando os valores de x e y recebidos
    const h = Math.hypot(x, y);

    // Criar o objeto de resposta contendo o resultado do cálculo
    const pacoteComResposta = {
        hipotenusa: h
    };

    // Envia o objeto pacoteComResposta de volta para o cliente em formato JSON
    res.json(pacoteComResposta);
});

const obterIP = () => {
    const interfaces = os.networkInterfaces();
    for (let nomeInterface in interfaces) {
        for (let info of interfaces[nomeInterface]) {
            if (info.family === 'IPv4' && !info.internal) return info.address;
        }
    }
    return 'localhost';
};

const ip = obterIP();

// Inicializa o servidor HTTPS com as opções de certificado geradas
https.createServer(options, app).listen(port, '0.0.0.0', () => {
    console.log(`Servidor seguro rodando em https://${ip}:${port}`);
});