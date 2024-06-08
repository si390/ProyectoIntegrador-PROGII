const datos = require('../db/index');
const db = require('../database/models')
const {validationResult} =require("express-validator");


const profileController = {

    registro: function (req, res) {

        const user = datos.usuarios[0];
        let nuevoUsuario = req.body.email;
        req.session.newUser = nuevoUsuario;
        res.cookie('UsuarioNuevo', nuevoUsuario, { maxAge: 1000 * 60 * 1 })
        return res.render('register', { nombre: user.nombre, email: user.email });

    },
    edit: function (req, res) {

        const user = datos.usuarios[0];
        return res.render('profile-edit', { nombre: user.nombre, email: user.email });

    },
    /* mostrarLogin: function (req, res) {
         const user = datos.usuarios[0];
         return res.render('login', {nombre: user.nombre, email: user.email }); 
         
     },
     mostrarPerfil: function (req, res) {
        const user = datos.usuarios[0];

        return res.render('profile', { nombre: user.nombre, email: user.email, foto: user.fotoPerfil });

    },*/

    mostrarPerfil: function (req, res) {
        if (req.session.user !== undefined) {       /*Cambiar, tengo que agregar los productos*/
            const user = req.session.user;
            return res.render('profile', { nombre: user.nombre, email: user.email, foto: user.fotoPerfil });
        } else {
            return res.redirect('/login');
        }
    },

    mostrarLogin: function (req, res) {                 /*Cambiar, el saludo tiene que estar en todas las vistas y se debe redirigir a home*/
        if (req.session.user !== undefined) {
            let saludo = `¡Bienvenid@, ${req.session.user.nombre}!♡`;
            return res.render('login', { saludo: saludo });
        } else {
            return res.render('login');
        }
    },

    login: function (req, res) {
        let errors = validationResult(req);
        const { email, contrasenia } = req.body;

        db.Usuario.findOne({ where: { email: email } })
            .then(function (usuarioLogueado) {
                if (!usuarioLogueado) {
                    return res.render("login", { error: "Usuario no registrado" });
                } else {
                    let comparacion = bcrypt.compareSync(contrasenia, usuarioLogueado.contrasenia);
                    if (!comparacion) {
                        return res.render("login", { errorContraseña: "Contraseña incorrecta" });
                    } else {
                        req.session.user = usuarioLogueado;
                        if (req.body.recordarme) {
                            res.cookie('user', usuarioLogueado.id, { maxAge: 1000 * 60 * 1 });
                        }
                        return res.redirect('/profile');
                    }
                }
            })
            .catch(function (error) {
                return res.render("login", { error: "Error al buscar usuario" });
            });
    },
};

module.exports = profileController;
