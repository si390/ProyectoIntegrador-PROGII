const datos = require('../db/index');
const db = require('../database/models');
let bcrypt = require('bcryptjs');
let op = db.Sequelize.Op;
const {validationResult} =require("express-validator");


const profileController = {

    registro: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            //No hay errores, seguimos adelante
        }else{
            res.render('register', {errors: errors.mapped(), old: req.body});
        }
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
        }}, 
    },

    mostrarLogin: function(req, res) {
        if (req.session.user == undefined) {
            return res.render('login');
        } else {
            return res.redirect('/index');
        }
    },

    login: function (req, res) {
        let errors = validationResult(req);
        const { email, contrasenia } = req.body;

        if (!errors.isEmpty()) {
            return res.render("login", { errors: errors.mapped(), old: req.body });
        }
        
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

    logout: function(req, res){

        if (req.session.user !== undefined) {
            req.session.destroy(); 
            return res.render('login');
        } else {
            return res.redirect('/index');
        }
      },
};

module.exports = profileController;
