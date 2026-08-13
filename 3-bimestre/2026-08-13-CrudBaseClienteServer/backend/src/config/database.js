const { Pool } = require('pg');
const path = require('path');

// Garante que lê o arquivo .env localizado na raiz do projeto
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD || ''), // Força o tipo String
});

module.exports = pool;