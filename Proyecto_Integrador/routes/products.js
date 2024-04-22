var express = require('express');
var router = express.Router();

const productController = require('../controllers/Controller');

//página descripción de producto//
router.get('/nombre', productController.producto);

router.get('/nombre/descripcion', productController.descripcion);

router.get('/nombre/comentarios', productController.comentarios)

module.exports = router;

