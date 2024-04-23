const datos = require('../db/index');

const indexController = {
    mascomentados: function(req, res) {
        const productos = datos.productos.lista;
        const mascomentados = [];

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].comentarios.length > 4) {
                mascomentados.push(productos[i]);
            }
        }
        return res.render('index', {mascomentados: mascomentados});
    },

    novedades: function(req,res) {
        
        const producto = datos.productos.lista;
        return res.render('index', {novedades: producto });
    }
};

module.exports = indexController;