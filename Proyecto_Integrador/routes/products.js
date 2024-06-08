var express = require('express');
var router = express.Router();
const productController = require('../controllers/Controller');
const {body}=require("express-validator");

//página descripción de producto//
router.get('/add', productController.mostrarProducto);
//Agregar producto//
router.get('/:id', productController.detalle);
router.get('/search', productController.search);

module.exports = router;

