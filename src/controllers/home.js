module.exports = {
    async pagInicialGet(req, res){
    res.render('../views/index');
    },
    async pagCadastroAlunoGet(req, res){
        res.render('../views/aluno');
    }
    // async pagCadastroSalaGet(req, res){
    //     res.render('../views/sala');
    // }
}
