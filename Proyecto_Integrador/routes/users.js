const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { body, check, validationResult } = require('express-validator');
const db = require("../database/models");

// Validation rules
const registroValidations = [
    body("email")
        .notEmpty().withMessage("Debes agregar un email")
        .bail()
        .isEmail().withMessage("Debe ser un correo electrónico válido")
        .bail()
        .custom(async (value) => {
            const user = await db.Usuario.findOne({ where: { email: value } });
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

router.post('/register', registroValidations, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('errors', errors.mapped());
        return res.render('register', { old: req.body, errors: errors.mapped() });
    }


});

router.get('/register', (req, res) => {
    res.render('register', {
        old: req.flash('old')[0] || {},
        errors: req.flash('errors')[0] || {}
    });
});

// Other routes
router.get('/', profileController.miPerfil.mostrarPerfil);
router.get('/login', profileController.login.mostrarLogin);
router.post('/login', profileController.login.login);
router.get('/logout', profileController.logout.logout);

module.exports = router;