var express = require('express');
var router = express.Router();
const productController = require('../controllers/Controller');
const {body}=require("express-validator");




/*detalle*/
router.get('/:id', productController.detail.detalle);

/*agregar producto*/
//router.get('/add', productController.mostrarProducto);

/*búsqueda*/
router.post('/results', productController.search.busqueda);

module.exports = router;

