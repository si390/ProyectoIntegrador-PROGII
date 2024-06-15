const datos = require('../db/index');
const db = require('../database/models');
let bcrypt = require('bcryptjs');
let op = db.Sequelize.Op;
const { validationResult } = require("express-validator");
const { Association } = require('sequelize');


const profileController = {

    register: {

        mostrarRegistro: function (req, res) {
            if (req.session.user == undefined) {
                res.render('register');
            } else {
                res.redirect('/index');
            }
        },

        registro: function (req, res) {
            let errors = validationResult(req);
            if (errors.isEmpty()) {

            } else {
                res.render('register', { errors: errors.mapped(), old: req.body });
            }
            const user = datos.usuarios[0];
            let nuevoUsuario = req.body.email;
            req.session.newUser = nuevoUsuario;
            res.cookie('UsuarioNuevo', nuevoUsuario, {  maxAge: 1000 * 60 * 60 * 24 * 7})
            return res.render('register', { nombre: user.nombre, email: user.email });

        },

    },

    login: {

        mostrarLogin: function (req, res) {
            if (req.session.user == undefined) {
                res.render('login');
            } else {
                res.redirect('/index');
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
                                res.cookie('UsuarioNuevo', usuarioLogueado.id, { maxAge: 1000 * 60 * 60 * 24 * 7});
                            }
                            return res.redirect('/profile');
                        }
                    }
                })
                .catch(function (error) {
                    return res.render("login", { error: "Error al buscar usuario" });
                });
        },

    },


    miPerfil: {

            mostrarPerfil: function(req, res) {
                if (req.session.userId) {
                    const userId = req.session.userId;
                    db.Usuario.findByPk(userId, {
                        include: {
                            association: 'productos',
                            order: [['created_at', 'DESC']]
                        }
                    })
                    .then(function(usuario) {
                        if (usuario) {
                            return res.render('profile', {
                                nombre: usuario.nombre,
                                email: usuario.email,
                                foto: usuario.fotoPerfil,
                                productos: usuario.productos,
                                numProductos: usuario.productos.length
                            });
                        } else {
                            return res.redirect('/login');
                        }
                    })
                    .catch(function(error) {
                        return res.render('profile', {
                            error: 'Error al cargar página de perfil de usuario'
                        });
                    });
                } else {
                    return res.redirect('/login');
                }
            }
        },

        logout: {

            logout: function (req, res) {
                req.session.destroy(function (error) {
                    res.clearCookie('UsuarioNuevo');
                    res.redirect('/index');
                });
            },

        },
},

module.exports = profileController;
