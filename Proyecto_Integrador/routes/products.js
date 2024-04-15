var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', productController.usuario);

router.get('/producto', productController.producto);

router.get('/comentarios', productController.comentario);

module.exports = router;
