var express = require('express');
var router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:productoId/comment', commentController.crearComentario);

module.exports = router;
