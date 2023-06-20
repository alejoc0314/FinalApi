const { Router } = require('express');

const route = Router();

const { contadorGet } = require('../controllers/contadorController.js');

route.get('/', contadorGet);


module.exports = route;