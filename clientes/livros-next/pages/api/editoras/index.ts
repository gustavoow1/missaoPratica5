import {NextApiRequest, NextApiResponse} from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora';


export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const editoras = ControleEditora.getEditoras();
            res.status(200).json(editoras);
        } else {
            res.status(405).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};