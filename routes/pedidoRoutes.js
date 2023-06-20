const { Router } = require('express');

const route = Router();

const { pedidoGet, pedidoGetOne, pedidoPost, pedidoPut, pedidoDelete } = require('../controllers/pedidoController.js');

route.get('/', pedidoGet);

route.get('/getOne', pedidoGetOne);

route.post('/', pedidoPost);

route.put('/:_id', pedidoPut);

route.delete('/', pedidoDelete);


module.exports = route;