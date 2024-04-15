var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');
const registroController = require('../controllers/registroController');

/* GET home page. */

//página descripción de producto//
router.get('/', productController.usuario);

router.get('/id', productController.producto);

router.get('/comentario/id/:id/:ok?', productController.comentario);

//página de inicio//

//Registrarse//
router.get('/registro', registroController.registrarUsuario);


//Mi perfil//


//Agregar producto//

//Editar perfil//


module.exports = router;
