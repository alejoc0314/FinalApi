const express = require('express');
const { dbConnection } = require('../database/config');
const bodyParser = require('body-parser');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors({
      origin: 'https://finalhbs.onrender.com'
    }))
    this.port = process.env.PORT;
    this.rolPath = '/api/rol';
    this.pedidoPath = '/api/pedido';
    this.ventaPath = '/api/venta';
    this.routes();
    this.middlewares();
    this.conectarDB();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('listening on port ' + this.port);
    });
  }

  middlewares() {
    this.app.use(express.static(__dirname + '/public'));
  }

  routes() {
    this.app.use(this.rolPath, require('../routes/rolRoutes.js'));
    this.app.use(this.pedidoPath, require('../routes/pedidoRoutes.js'));
    this.app.use(this.ventaPath, require('../routes/ventaRoutes.js'));
  }

  conectarDB() {
    dbConnection();
  }
}

module.exports = { Server };