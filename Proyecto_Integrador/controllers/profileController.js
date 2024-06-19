const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");

const profileController = {
    register: {
        mostrarRegistro: (req, res) => {
            const old = req.body || {};
            const errors = req.flash('errors') || {};
            res.render('register', { old, errors });
        },

        registro: async (req, res) => {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('register', { errors: errors.mapped(), old: req.body });
            }
            try {
                let hashedPassword = bcrypt.hashSync(req.body.contrasenia, 10);
                await db.Usuario.create({
                    username: req.body.usuario,
                    nombre: req.body.nombre || null,
                    email: req.body.email,
                    contrasenia: hashedPassword,
                    fecha: req.body.fechaNacimiento || null,
                    dni: req.body.nroDocumento || null,
                    fotoPerfil: req.body.fotoPerfil || null,
                    created_at: new Date()
                });
                res.redirect('/login');
            } catch (error) {
                res.render('register', { error: "Error al registrar el usuario", old: req.body });
            }
        }
    },

    login: {
        mostrarLogin: (req, res) => {
            if (!req.session.user) {
                res.render('login');
            } else {
                res.redirect('/');
            }
        },

        login: async (req, res) => {
            let errors = validationResult(req);
            const { email, contrasenia } = req.body;

            if (!errors.isEmpty()) {
                return res.render("login", { errors: errors.mapped(), old: req.body });
            }

            try {
                const usuarioLogueado = await db.Usuario.findOne({ where: { email } });
                if (!usuarioLogueado) {
                    return res.render("login", { error: "Usuario no registrado" });
                }

                const comparacion = bcrypt.compareSync(contrasenia, usuarioLogueado.contrasenia);
                if (!comparacion) {
                    return res.render("login", { errorContraseña: "Contraseña incorrecta" });
                }

                req.session.user = usuarioLogueado;
                if (req.body.recordarme) {
                    res.cookie('UsuarioNuevo', usuarioLogueado.id, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                }
                res.redirect('/profile');
            } catch (error) {
                res.render("login", { error: "Error al buscar usuario" });
            }
        }
    },

    miPerfil: {
        mostrarPerfil: async (req, res) => {
            if (req.session.user) {
                const userId = req.session.user.id;
                try {
                    const usuario = await db.Usuario.findByPk(userId, {
                        include: { association: 'productos' },
                        order: [['created_at', 'DESC']]
                    });
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
                } catch (error) {
                    return res.render('profile', { error: 'Error al cargar página de perfil de usuario' });
                }
            } else {
                return res.redirect('/login');
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
    }
};

module.exports = profileController;