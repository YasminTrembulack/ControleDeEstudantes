// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/cadastro-aluno', home.pagCadastroAlunoGet);
route.get('/cadastro-sala', home.pagCadastroSalaGet);

module.exports = route;