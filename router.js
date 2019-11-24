const express = require('express');
const api = express.Router();

api.get('/', async (req, res) => {
    await res.status(200).send({
        message: 'Funcionando API RestFull.'
    });
});

module.exports = api;