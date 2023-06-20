const { Router } = require('express');

const route = Router();

const { rolGet, rolGetOne, rolPost, rolPut, rolDelete } = require('../controllers/rolController.js');

route.get('/', rolGet);

route.get('/getOne', rolGetOne);

route.post('/', rolPost);

route.put('/:_id', rolPut);

route.delete('/', rolDelete);

module.exports = route;