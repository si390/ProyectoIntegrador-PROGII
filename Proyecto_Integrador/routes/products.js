var express = require('express');
var router = express.Router();

const productController = require('../controllers/Controller');

//página descripción de producto//
router.get('/', productController.producto);

router.get('/descripcion', productController.descripcion);

router.get('/descripcion', productController.comentarios)

module.exports = router;

