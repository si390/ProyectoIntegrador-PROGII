var express = require('express');
var router = express.Router();
const Controller = require('../controllers/Controller')
const {body}=require("express-validator");


router.get('/', Controller.mostrarIndex);

module.exports = router;
