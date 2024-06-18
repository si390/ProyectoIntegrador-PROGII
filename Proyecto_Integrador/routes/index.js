var express = require('express');
var router = express.Router();
const Controller = require('../controllers/Controller')
const {body}=require("express-validator");



// Home page
router.get('/', Controller.index.mostrarIndex);

module.exports = router;
