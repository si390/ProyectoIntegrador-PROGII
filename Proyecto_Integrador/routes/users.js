var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');
const { body } = require("express-validator");
let db = require("../database/models")


/*Mi perfil*/
router.get('/', profileController.mostrarPerfil);
router.get('/edit', profileController.edit);

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
router.get('/register', registroValidations, profileController.registro);


/*Login */
let validacionesLogin = [
    body("email")
        .notEmpty().withMessage("El email no puede estar vacío")
        .isEmail().withMessage("Debe ser un correo electrónico válido"),

    body("contraseña")
        .notEmpty().withMessage("La contraseña no puede estar vacía")
        .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
];

router.get('/login', validacionesLogin, profileController.mostrarLogin);
router.post('/login', validacionesLogin, profileController.login);

/*Logout*/
<<<<<<< HEAD
router.post('/logout', profileController.logout)
=======
router.get('/logout', profileController.mostrarLogout)
router.post('/logout', profileController.mostrarLogout)
>>>>>>> ce1e16a85b983859d78ee89088c258eb672f9fe0


module.exports = router;



