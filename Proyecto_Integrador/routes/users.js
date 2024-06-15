var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');
const { body } = require("express-validator");
let db = require("../database/models")


/*Mi perfil*/
router.get('/', profileController.miPerfil.mostrarPerfil);
router.get('/edit', profileController.miPerfil.edit);           //*cambiar*//

/*Register*/
let registroValidations = [
    body("email")
        .notEmpty().withMessage("Debes agregar un email").bail()
        .isEmail()
        .custom(function (value) {
            return db.Usuario.findOne({
                where: { email: value }
            })
                .then(function (user) {
                    if (user) {
                        throw new Error('El email ingresado ya se encuentra registrado');
                    }
                })
        }),
    body("usuario")
        .notEmpty().withMessage("Debes agregar un usuario").bail()
        .isAlphanumeric(),
    body("contrasenia")
        .notEmpty().withMessage("No puedes dejar el campo contraseña vacío").bail()
        .isAscii()
        .isLength({ min: 4 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
    body("fechaNacimiento")
        .isDate(),
    body("nroDocumento")
        .isInt(),
    body("fotoPerfil")
        .isAlphanumeric(),
];
router.get('/register', registroValidations, profileController.register.mostrarRegistro);
router.post('/register', registroValidations, profileController.register.registro);


/*Login */
let validacionesLogin = [
    body("email")
        .notEmpty().withMessage("El email no puede estar vacío")
        .isEmail().withMessage("Debe ser un correo electrónico válido"),

    body("contraseña")
        .notEmpty().withMessage("La contraseña no puede estar vacía")
        .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
];

router.get('/login', validacionesLogin, profileController.login.mostrarLogin);
router.post('/login', validacionesLogin, profileController.login.login);

/*Logout*/
router.post('/logout', profileController.logout.logout)


module.exports = router;



