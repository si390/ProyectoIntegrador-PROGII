const datos = require('../db/index');
const db = require('../database/models');

const Controller = {
    mostrarIndex: function(req, res) {
        const productos = datos.productos;
        const masComentados = [];
        const novedades = [];

        productos.forEach(producto => {
            if (producto.comentarios.length > 4) {
                masComentados.push(producto);
            } else {
                novedades.push(producto);
            }
        });

        return res.render('index', { masComentados: masComentados, novedades: novedades });
    },

    mostrarProducto: function(req, res) {
        const producto = datos.productos;

        return res.render('product-add', {
            nombre: producto.nombre,
            fotoproducto: producto.imagen,
            descripcioncorta: producto.descripcion
        });
    },

    search: function(req, res) {
        const query = req.query.q;
        const resultados = datos.productos.filter(p => 
            p.nombre.includes(query) || p.descripcion.includes(query)
        );

        return res.render('search-results', { resultados: resultados });
    },

    detalle: function(req, res) {
        const producto = datos.productos; 

        return res.render('product', {
            id: producto.id,
            nombre: producto.nombre,
            fotoproducto: producto.imagen,
            descripcion: producto.descripcion,
            comentarios: producto.comentarios,
        });
    }

}

module.exports = Controller;