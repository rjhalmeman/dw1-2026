require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`🌐 Aplicação acessível em: http://localhost:${PORT}`);
    console.log(`📡 API pronta em: http://localhost:${PORT}/api`);
});