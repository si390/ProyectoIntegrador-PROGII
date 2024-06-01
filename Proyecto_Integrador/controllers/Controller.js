const datos = require('../db/index');
const db = require('../database/models');

const Controller = {
    mostrarIndex: function(req, res) {
        const productos = datos.productos.lista;
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
        const productId = req.params.id;
        const producto = datos.productos.lista.find(p => p.id == productId);

        if (!producto) {
            return res.status(404).send('El producto no se encuentra disponible');
        }

        return res.render('product', {
            nombre: producto.nombre,
            fotoproducto: producto.imagen,
            descripcion: producto.descripcion,
            comentarios: producto.comentarios,
            usuario: producto.comentarios.map(c => c.usuario)
        });
    },

    search: function(req, res) {
        const query = req.query.q;
        const resultados = datos.productos.lista.filter(p => 
            p.nombre.includes(query) || p.descripcion.includes(query)
        );

        return res.render('search-results', { resultados: resultados });
    },

    informacion: function(req, res) {
        return this.mostrarProducto(req, res);
    },

    detalle: function(req, res) {
        const productId = req.params.id;
        const producto = datos.productos.lista.find(p => p.id == productId);

        if (!producto) {
            return res.status(404).send('El producto no se encuentra disponible');
        }

        let descripcioncorta = producto.descripcion.split('.').slice(0, 2).join('.') + '.';

        return res.render('product-add', {
            nombre: producto.nombre,
            fotoproducto: producto.imagen,
            descripcioncorta: descripcioncorta
        });
    }
}

module.exports = Controller;