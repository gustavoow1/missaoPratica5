import Editora from '../modelo/Editora';

const editoras: Array<Editora> = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C'),
];

class ControleEditora {
    static getEditoras(): Array<Editora> {
        return editoras;
    }

    static getNomeEditora(codEditora: number): string {
        const editora = editoras.filter(e => e.codEditora === codEditora)[0];
        return editora ? editora.nome : '';
    }
}

export default ControleEditora;