var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');


//página descripción de producto//
router.get('/', productController.usuario);

router.get('/producto', productController.producto);

router.get('/comentarios', productController.comentario);

//página de inicio//

//Página de usuario//
