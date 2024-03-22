
// Importando as tabelas do DB
const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async pagCadastroSalaGet(req, res){
        res.render('../views/sala');
    },
    async salaInsert(req, res){
        // Recebe as informações do front-end
        const dados = req.body;

        //console.log(req.body);

        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.nome, // name:"nome"
            Capacidade: dados.capacidade
        });
        // Redirecionar para a página principal
        res.redirect('/');
    },
    
    async aluno(req, res){

        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });

        // Renderizando e passando o nome das salas para o front
        res.render('../views/aluno', {salas});
    }
}