var express = require('express');
var router = express.Router();

const productController = require('../controllers/Controller');

//página descripción de producto//
router.get('/', productController.mostrarProducto);
//Index//
router.get('/index', productController.index);






module.exports = router;

