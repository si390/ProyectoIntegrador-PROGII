const basedatos = require('../db/index');
const usuario = require('../db/index');
const datos =  basedatos.usuarios.lista;

const profileController = {

    mostrarPerfil: function (req, res) {

        return res.render('profile', {nombre: datos[0].nombre, email: datos[0].email });

    }
};

module.exports = profileController;
