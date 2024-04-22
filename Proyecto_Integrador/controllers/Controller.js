const datos = require('../db/index')

const Controller = {
    mostrarProducto : function(res, res){
        const producto = datos.productos.lista[0];
        return res.render('product', {nombre: producto.nombre, descripcion: producto.descripcion, comentarios: producto.comentarios, usuario: producto.comentarios.usuario })

    }
}
module.exports = Controller;