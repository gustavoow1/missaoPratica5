const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try{
        const livros = await livroDao.obterLivros();
        res.json(livros);
    }catch (err) {
        res.status(500).json({ error: err.message});
    }
});

router.post('/', async(req, res) => {
    try {
        const livro = await livroDao.incluir(req.body);
        res.status(201).json(livro);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

router.delete('/', async(req, res) => {
    try{
        const resultado = await livroDao.excluir(req.params.id);
        console.log(req.params)
        if(resultado.deletedCount > 0) {
            res.status(204).send();
        }else {
            console.log(resultado);
            res.status(404).json( { message: 'Livro não encontrado' });
        }
    }catch (err) {
        res.status(500).json({ error: err.message});
    }
})


module.exports = router;