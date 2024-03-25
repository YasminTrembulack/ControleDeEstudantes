
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
    },

    async alunoInsert(req, res){
        // Recebendo as informações pelo Body
        const dados = req.body;
        // Nome padrão da foto
        let foto = 'usuario.png';
        // Verificando se foi enviada alguma foto
        if (req.file) {
            // Pegar novo nome da foto
            foto = req.file.filename;
        }

        // Criando aluno no banco de dados
        await aluno.create({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.sala,
            Foto: foto
        });
        // Redirecionar para a página principal
        res.redirect('/');
    },

    async pagInicialPost(req, res){

        const id = req.body.nome;

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto', 'IDSala'],
            where: { IDSala: id }
        });
        const salas = await sala.findAll({ raw: true, attributes: ['IDSala', 'Nome'] });
        res.render('../views/index', {salas, alunos, id});
    },

    async pagInicialGet(req, res){
        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });
        res.render('../views/index', {salas, alunos: '', id: ''});
    }
}