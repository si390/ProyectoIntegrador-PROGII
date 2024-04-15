var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//Mi perfil//
router.get('/', productController.usuario);

module.exports = router;
