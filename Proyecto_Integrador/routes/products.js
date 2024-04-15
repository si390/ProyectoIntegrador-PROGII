var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', productController.usuario);

router.get('/id', productController.producto);

router.get('/comentario/id/:id/:ok?', productController.comentario);

module.exports = router;
