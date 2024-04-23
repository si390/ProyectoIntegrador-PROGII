var express = require('express');
var router = express.Router();

const productController = require('../controllers/Controller');

//página descripción de producto//
router.get('/', productController.mostrarProducto);
//Agregar producto//
router.get('/add', productController.detalle);
router.get('/search', productController.search);

//Index//
router.get('/index', productController.mostrarIndex);

module.exports = router;

