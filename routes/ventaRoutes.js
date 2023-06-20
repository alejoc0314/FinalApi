const { Router } = require('express');

const route = Router();

const { ventaGet, ventaPost, ventaGetOne, ventaPut, ventaDelete } = require('../controllers/ventaController.js');

route.get('/', ventaGet);

route.get('/getOne', ventaGetOne);

route.post('/', ventaPost);

route.put('/', ventaPut);

route.delete('/', ventaDelete);

module.exports = route;