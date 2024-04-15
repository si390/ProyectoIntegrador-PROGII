var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

/* GET home page. */

//página descripción de producto//
router.get('/', productController.usuario);

router.get('/id', productController.producto);

router.get('/comentario/id/:id/:ok?', productController.comentario);

//página de inicio//



//Mi perfil//




module.exports = router;
