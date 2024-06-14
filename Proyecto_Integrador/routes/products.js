var express = require('express');
var router = express.Router();
const productController = require('../controllers/Controller');
const {body}=require("express-validator");




/*detalle*/
router.get('/:id', productController.detalle);

/*agregar producto*/
router.get('/add', productController.mostrarProducto);

/*búsqueda*/
router.get('/results', productController.search);

module.exports = router;

