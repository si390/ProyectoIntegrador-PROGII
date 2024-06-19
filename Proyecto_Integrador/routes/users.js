const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { body, validationResult } = require('express-validator');
const db = require("../database/models");


const registroValidations = [
    body("email")
        .notEmpty().withMessage("Debes agregar un email")
        .isEmail().withMessage("Debe ser un correo electrónico válido")
        .custom(async (value) => {
            const user = await db.Usuario.findOne({ where: { email: value } });
            if (user) {
                throw new Error('El email ingresado ya se encuentra registrado');
            }
        }),
    body("usuario")
        .notEmpty().withMessage("Debes agregar un usuario"),
    body("contrasenia")
        .notEmpty().withMessage("No puedes dejar el campo contraseña vacío")
        .isLength({ min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres"),
    body("fechaNacimiento")
        .optional({ checkFalsy: true })
        .isDate().withMessage("Debe ser una fecha válida"),
    body("nroDocumento")
        .optional({ checkFalsy: true })
        .isInt().withMessage("El número de documento debe ser un entero"),
    body("fotoPerfil")
        .optional({ checkFalsy: true })
        .isAlphanumeric().withMessage("La URL de la foto de perfil solo puede contener letras y números")
];

router.post('/register', registroValidations, profileController.register.registro);

router.get('/register', profileController.register.mostrarRegistro);

router.get('/', profileController.miPerfil.mostrarPerfil);
router.get('/login', profileController.login.mostrarLogin);
router.post('/login', profileController.login.login);
router.get('/logout', profileController.logout.logout);

module.exports = router;