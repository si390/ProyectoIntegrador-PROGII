var express = require('express');
var router = express.Router();
const Controller = require('../controllers/Controller')
const commentController = require('../controllers/commentController');
const productController = require('../controllers/Controller');
const profileController = require('../controllers/profileController');
const {body}=require("express-validator");



// Home page
router.get('/', Controller.getAllProducts);
router.get('/logout', profileController.logout.logout);

module.exports = router;
