const usuario = require('../db/index');
const datos = usuario.perfil;

const profileController = {

    mostrarPerfil: function (req, res) {

        return res.render('profile', { nombre: datos.nombre, email: datos.email });

    }
};

module.exports = profileController;
