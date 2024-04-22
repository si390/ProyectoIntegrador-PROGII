const datos = require('../db/index')

const Controller = {
    mostrarProducto : function(req, res){
        const producto = datos.productos.lista[0];
        return res.render('product', {nombre: producto.nombre, fotoproducto: producto.imagen, descripcion: producto.descripcion, comentarios: producto.comentarios, usuario: producto.comentarios.usuario })
    },

    search: function(req, res){
        const producto = datos.productos.lista[0];
        return res.render('search-results', {nombre: producto.nombre, descripcion: producto.descripcion, comentarios: producto.comentarios});
    },
    
    detalle: function(req, res){
        const producto = datos.productos.lista[0];
        
        let descripcioncorta = '';
        for (let i = 0; i < producto.descripcion.length; i++) {
        descripcioncorta += producto.descripcion[i];
            if (producto.descripcion[i] === '.') {
                break;
    }
        
    }return res.render('product-add', {nombre: producto.nombre, fotoproducto: producto.imagen, descripcioncorta: descripcioncorta})

}}
module.exports = Controller;