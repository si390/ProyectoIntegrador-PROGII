var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');
const {body}=require("express-validator");


/*Mi perfil*/
router.get('/', profileController.mostrarPerfil);
router.get('/edit', profileController.edit);

/*Register*/
router.get('/register', profileController.registro);

/*Login*/
router.get('/login', profileController.mostrarLogin);
router.post('/login', profileController.login);

module.exports = router;


