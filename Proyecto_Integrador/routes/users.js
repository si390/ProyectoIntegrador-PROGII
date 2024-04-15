var express = require('express');
const profileController = require('../controllers/profileController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Mi perfil//

router.get('/profile', profileController.nombre);

router.get('/profile', profileController.email);

module.exports = router;
