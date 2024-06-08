var express = require('express');
var router = express.Router();
const commentController = require('../controllers/commentController');
const {body}=require("express-validator");

router.post('/:productoId/comment', commentController.crearComentario);

module.exports = router;
