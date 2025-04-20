const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:cep', async (req, res) => {
    const { cep } = req.params;

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) {
            return res.status(404).json({ message: 'CEP não encontrado' });
        }
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o CEP' });
    }
});

module.exports = router;