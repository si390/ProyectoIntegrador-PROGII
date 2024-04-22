var express = require('express');
var router = express.Router();

const productController = require('../controllers/Controller');

//Index//


//página descripción de producto//
router.get('/products', productController.producto);

router.get('/products', productController.fotoproducto);

router.get('/products/descripcion', productController.descripcion);

router.get('/products', productController.comentarios)



module.exports = router;

