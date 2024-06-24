const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");

const Product = db.Product;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const profileController = {
    register: { 
        mostrarRegistro: (req, res) => {
            res.render('register', { old: {}, errors: {} });
        },

        registro: (req, res) => {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('register', { errors: errors.mapped(), old: req.body });
            }

            let hashedPassword = bcrypt.hashSync(req.body.contrasenia, 10);

            db.Usuario.create({
                username: req.body.usuario,
                nombre: req.body.nombre || null,
                email: req.body.email,
                contrasenia: hashedPassword,
                fecha: req.body.fechaNacimiento || null,
                dni: req.body.nroDocumento || null,
                fotoPerfil: req.body.fotoPerfil || null,
                created_at: new Date()
            })
            .then(newUser => {
                req.session.user = newUser;
                res.redirect('/profile');
            })
            .catch(error => {
                console.error("Error al registrar el usuario:", error);
                res.render('register', { error: "Error al registrar el usuario", old: req.body });
            });
        }
    },

    login: {
        mostrarLogin: (req, res) => {
            if (!req.session.user) {
                res.render('login', { old: {}, errors: {} });
            } else {
                res.redirect('/');
            }
        },

        login: (req, res) => {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render("login", { errors: errors.mapped(), old: req.body });
            }

            const { email, contrasenia } = req.body;

            db.Usuario.findOne({ where: { email } })
            .then(usuarioLogueado => {
                if (!usuarioLogueado) {
                    return res.render("login", { error: "Usuario no registrado", old: req.body });
                }

                const comparacion = bcrypt.compareSync(contrasenia, usuarioLogueado.contrasenia);
                if (!comparacion) {
                    return res.render("login", { errorContraseña: "Contraseña incorrecta", old: req.body });
                }

                req.session.user = usuarioLogueado;
                if (req.body.recordarme) {
                    res.cookie('UsuarioNuevo', usuarioLogueado.id, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                }
                res.redirect('/profile');
            })
            .catch(error => {
                console.error("Error al buscar usuario:", error);
                res.render("login", { error: "Error al buscar usuario", old: req.body });
            });
        }
    },

    miPerfil: {
        mostrarPerfil: (req, res) => {
            if (req.session.user) {
                const userId = req.session.user.id;
                db.Usuario.findByPk(userId, {
                    include: { association: 'productos' },
                    order: [['created_at', 'DESC']]
                })
                .then(usuario => {
                    if (usuario) {
                        res.render('profile', {
                            nombre: usuario.nombre,
                            email: usuario.email,
                            foto: usuario.fotoPerfil,
                            productos: usuario.productos,
                            numProductos: usuario.productos.length
                        });
                    } else {
                        res.redirect('/profile/login');
                    }
                })
                .catch((error) => {
                    res.render('profile', { error: 'Error al cargar página de perfil de usuario' });
                });
            } else {
                res.redirect('/profile/login');
            }
        }
    },

    logout: {
        logout: (req, res) => {
            req.session.destroy((error) => {
                res.clearCookie('UsuarioNuevo');
                res.redirect('/');
            });
        }
    },
    formularioeditarperfil: function(req, res) {
        if (!req.session.user) {
            return res.redirect('/profile/login');
        }

        db.Usuario.findByPk(req.session.user.id)
            .then(user => {
                res.render('profile-edit', { user });
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    },

    actualizarperfil: function(req, res) {
        if (!req.session.user) {
            return res.redirect('/profile/login');
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('profile-edit', {
                user: req.session.user,
                errors: errors.mapped()
            });
        }

        const { nombre, email, fotoPerfil, password } = req.body;
        const updatedData = {
            nombre,
            email,
            fotoPerfil
        };

        if (password) {
            updatedData.password = bcrypt.hashSync(password, 10);
        }

        db.Usuario.update(updatedData, {
            where: { id: req.session.user.id }
        })
            .then(() => {
                return db.Usuario.findByPk(req.session.user.id);
            })
            .then(user => {
                req.session.user = user;
                res.redirect('/profile');
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    }
};

module.exports = profileController;