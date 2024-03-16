import Livro from '../modelo/Livro';

const livros: Array<Livro> = [
    new Livro(1, 1, 'Livro 1', 'Resumo do Livro 1', ['Autor 1', 'Autor 2']),
    new Livro(2, 2, 'Livro 2', 'Resumo do Livro 2', ['Autor 4', 'Autor 5']),
    new Livro(3, 3, 'Livro 3', 'Resumo do Livro 3', ['Autor 6', 'Autor 7'])
]

class ControleLivro {
    static obterLivros(): Array<Livro> {
        return livros;
    }

    static incluir(livro: Livro): void{
        const novoCodigo = Math.max(...livros.map(l => l.codigo), 0) + 1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }

    static excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export default ControleLivro;