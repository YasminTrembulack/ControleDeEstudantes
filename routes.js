// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Iniciando Multer
const multer = require("multer");

// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando as rotas
//Home
route.get('/', cadastro.pagInicialGet);
route.post('/', cadastro.pagInicialPost);

//Aluno
// route.get('/cadastro-aluno', home.pagCadastroAlunoGet); //Anteriormente estava assim mas criamos o metodo aluno para retornar todas as salas cadastradas
route.get('/cadastro-aluno', cadastro.aluno);
// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"
route.post('/cadastro-aluno', multer(config).single('foto'), cadastro.alunoInsert);
// route.post('/cadastro-aluno', cadastro.alunoInsert);
//route.post('/cadastro-aluno', .pagCadastroAlunoGet);


//Sala
route.get('/cadastro-sala', cadastro.pagCadastroSalaGet); 
route.post('/cadastro-sala', cadastro.salaInsert);


module.exports = route;