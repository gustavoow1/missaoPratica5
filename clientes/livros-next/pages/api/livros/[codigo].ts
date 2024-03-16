import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from "../../../classes/controle/ControleLivros";

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if(req.method === 'DELETE') {
            const codigoLivro = Number(req.query.codigo);

            ControleLivro.excluir(codigoLivro);
            res.status(200).json({ mensagem: 'Livro excluido com sucesso.'});
        } else {
            res.status(405).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};