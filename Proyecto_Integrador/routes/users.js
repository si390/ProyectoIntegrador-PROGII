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
let validacionesLogin = [
    body("email")
    .notEmpty().withMessage("El email no puede estar vacío")
    .isEmail().withMessage("Debe ser un correo electrónico válido"),

    body("contraseña")
    .notEmpty().withMessage("La contraseña no puede estar vacía")
    .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
];
router.get('/login', validacionesLogin, profileController.mostrarLogin);
router.post('/login', validacionesLogin, profileController.login);

module.exports = router;


