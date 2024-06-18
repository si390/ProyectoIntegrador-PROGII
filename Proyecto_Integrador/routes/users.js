const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { body } = require("express-validator");
const db = require("../database/models");

/* Mi perfil */
router.get('/', profileController.miPerfil.mostrarPerfil);

/* Register */
const registroValidations = [
    body("email")
        .notEmpty().withMessage("Debes agregar un email")
        .bail()
        .isEmail().withMessage("Debe ser un correo electrónico válido")
        .bail()
        .custom((value) => {
            const user =  db.Usuario.findOne({ where: { email: value } });
            if (user) {
                throw new Error('El email ingresado ya se encuentra registrado');
            }
        }),
    body("usuario")
        .notEmpty().withMessage("Debes agregar un usuario")
        .bail()
        .isAlphanumeric().withMessage("El usuario solo puede contener letras y números"),
    body("contrasenia")
        .notEmpty().withMessage("No puedes dejar el campo contraseña vacío")
        .bail()
        .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
    body("fechaNacimiento")
        .notEmpty().withMessage("Debes agregar una fecha de nacimiento")
        .bail()
        .isDate().withMessage("Debe ser una fecha válida"),
    body("nroDocumento")
        .notEmpty().withMessage("Debes agregar un número de documento")
        .bail()
        .isInt().withMessage("El número de documento debe ser un entero"),
    body("fotoPerfil")
        .optional({ checkFalsy: true })
        .isAlphanumeric().withMessage("La URL de la foto de perfil solo puede contener letras y números")
];

router.get('/register', profileController.register.mostrarRegistro);
router.post('/register', registroValidations, profileController.register.registro);

/* Login */
const validacionesLogin = [
    body("email")
        .notEmpty().withMessage("El email no puede estar vacío")
        .bail()
        .isEmail().withMessage("Debe ser un correo electrónico válido"),
    body("contrasenia")
        .notEmpty().withMessage("La contraseña no puede estar vacía")
        .bail()
        .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
];

router.get('/login', profileController.login.mostrarLogin);
router.post('/login', validacionesLogin, profileController.login.login);

/* Logout */
router.get('/logout', profileController.logout.logout);

module.exports = router;