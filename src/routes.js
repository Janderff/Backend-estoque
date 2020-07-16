const express = require('express');

const UsersControllers = require('./controllers/UsersControllers');
const ProdutosController = require('./controllers/ProdutosController');
const ListSaleController = require('./controllers/ListSaleController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users',UsersControllers.index);
routes.post('/users',UsersControllers.create);

routes.post('/produtos',ProdutosController.create);
routes.get('/produtos',ProdutosController.index);
routes.delete('/produtos/:id',ProdutosController.delete);
routes.get('/list',ListSaleController.index);
module.exports= routes;