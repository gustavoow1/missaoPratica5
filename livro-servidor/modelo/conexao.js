const mongoose = require('mongoose');

const stringConexao = 'mongodb://localhost:27017/livraria';
const opcoes = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(stringConexao, opcoes)
    .then(() => console.log('Conectado!'))
    .catch((err) => console.error('Erro na conexão: ', err));

module.exports = mongoose;