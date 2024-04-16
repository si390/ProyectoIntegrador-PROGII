const datos = require('../db/index');

const profileController = {
    
    mostrarPerfil: function (req, res) {

        const user = datos.usuarios.lista[0];

        return res.render('profile', {nombre: user.nombre, email: user.email });
    }
};

module.exports = profileController;
