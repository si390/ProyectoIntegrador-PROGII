const datos = require('../db/index');
const db = require('../database/models')
const profileController = {

    mostrarPerfil: function (req, res) {

        const user = datos.usuarios[0];

        return res.render('profile', { nombre: user.nombre, email: user.email, foto: user.fotoPerfil });

    },
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
         
     },*/

    mostrarLogin: function (req, res) {
        if (req.session.user !== undefined) { 

            return res.redirect("/");
        
        } else {
            
            return res.render('login');
        }
    },
    login: function (req, res) {
        const { email, contrasenia } = req.body;

        db.Usuario.findOne({ where: { email: email, contrasenia: contrasenia } })
            .then(function (usuarioLogueado) {

                if (!usuarioLogueado) {

                    return res.render("login", { error: "Usuario no registrado" });

                } else if (usuarioLogueado.contrasenia !== contrasenia) {

                    return res.render("login", { error: "Contraseña incorrecta" });

                } else {

                    return res.render("profile", { usuario: usuarioLogueado });
                }
            })
            .catch(function (error) {
                return res.render("login", { error: "Error al buscar usuario" });
            });
    },
};

module.exports = profileController;
