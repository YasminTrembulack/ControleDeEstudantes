//arquivo que vai conectar com obanco de dados

const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('db_projetoWeb', 'ProjetoWeb', 'yasmin12',
{
    dialect: 'mssql', host:'localhost', port: 1433
});
database.sync();
module.exports = database;