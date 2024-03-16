import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from '../../../classes/controle/ControleLivros';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if(req.method === 'GET') {
            const livros = ControleLivro.obterLivros();
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            const novoLivro = req.body;

            ControleLivro.incluir(novoLivro);
            res.status(200).json({ mensagem: 'Livro incluido com sucesso.'});
        } else {
            res.status(405).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};