var express = require('express');
var router = express.Router();

const Controller = require('../controllers/Controller');

//página descripción de producto//
router.get('/', Controller.mostrarProducto);


module.exports = router;

