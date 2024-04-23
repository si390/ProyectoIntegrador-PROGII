var express = require('express');
var router = express.Router();
const Controller = require('../controllers/Controller')


router.get('/', Controller.mostrarIndex);
module.exports = router;
