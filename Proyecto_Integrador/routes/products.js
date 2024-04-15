var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

//página descripción de producto//

router.get('/', productController.usuario);

router.get('/', productController.producto);

router.get('/comentarios', productController.comentario);

module.exports = router;

