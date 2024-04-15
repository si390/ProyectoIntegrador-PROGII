const products = require('../db/index');

const addproductController = {

    agregarProducto: function (req, res) {

        let {nombre, descripcion, imagen, comentarios} = req.body;

        const nuevoProducto = {
            nombre,
            descripcion,
            imagen,
            comentarios,
        };

        basedatos.producto = nuevoProducto;
        return res.send('Producto publicado');
    }

};

module.exports = addproductController;