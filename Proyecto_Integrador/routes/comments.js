var express = require('express');
var router = express.Router();
const commentController = require('../controllers/commentController');
const {body}=require("express-validator");

let validacionesComentarios =[
     body("comment")
    .notEmpty().withMessage("El comentario no puede estar vacío")
    .isLength({min:3, max:250}).withMessage("Debe contener mínimo 3 letras"),
];

router.post('/:productoId/comment', validacionesComentarios, commentController.crearComentario);

module.exports = router;
