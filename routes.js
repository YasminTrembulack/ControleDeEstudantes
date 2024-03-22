// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando as rotas
//Home
route.get('/', home.pagInicialGet);

//Aluno
route.get('/cadastro-aluno', home.pagCadastroAlunoGet);
//route.post('/cadastro-aluno', .pagCadastroAlunoGet);


//Sala
route.get('/cadastro-sala', cadastro.pagCadastroSalaGet); 
route.post('/cadastro-sala', cadastro.salaInsert);


module.exports = route;