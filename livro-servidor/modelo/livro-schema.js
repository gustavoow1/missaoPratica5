const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: false,
    },
    titulo: {
        type: String,
        required: true,
    },
    resumo: {
        type: String,
        required: true,
    },
    autor: {
        type: [String],
        required: true,
    },
    codEditora: {
        type: Number,
        required: true,
    },
})


const Livro = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = Livro;