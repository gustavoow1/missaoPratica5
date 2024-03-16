const Livro = require('./livro-schema');

async function obterLivros() {
    try {
        const livros = await Livro.find();
        return livros;
    }catch (err) {
        console.error("Erro ao obter livros:", err);
        throw err;
    }
}

async function incluir(livro) {
    try{
        const novoLivro = await Livro.create(livro);
        return novoLivro;
    } catch(err) {
        console.error("Erro ao adicionar livro: ", err);
        throw err;
    }
}

async function excluir(id) {
    try{
        const resultado = await Livro.deleteOne({_id: id});
        return resultado;
    }catch (err) {
        console.error("Erro ao excluir livro: ", err);
    }
}

module.exports = { obterLivros, incluir, excluir};