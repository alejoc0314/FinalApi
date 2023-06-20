const {response} = require('express');

const Contador = require('../models/contadorModel.js');


const contadorGet = async (req, res = response) => {
    const contador = await Contador.find();
    res.json({
        contador
    });
};

module.exports = { contadorGet }; 
