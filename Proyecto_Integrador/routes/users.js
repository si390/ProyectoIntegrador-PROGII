var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

//Mi perfil//

router.get('/', profileController.mostrarPerfil);
router.get('/register', profileController.registro);
router.get('/login', profileController.login);
module.exports = router;


