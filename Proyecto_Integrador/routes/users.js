var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

//Mi perfil//

router.get('/', profileController.mostrarPerfil);
router.get('/register', profileController.registro);
router.get('/edit', profileController.edit);

router.get('/login', profileController.mostrarLogin);
router.post('/login', profileController.login);

module.exports = router;


