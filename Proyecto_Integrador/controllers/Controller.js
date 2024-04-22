const datos = require('../db/index')
const productController = {
    producto: function(req,res){
        const product = datos.productos.lista[0];
        return res.render('product', {nombre: product.nombre});
    },
    descripcion: function(req,res){
        const descripcion = datos.productos.lista[0];
        return res.render('product', {descripcion: descripcion.descripcion});
    },
   comentarios: function(req,res){
        const comentarios = datos.productos.lista[0];
        return res.render('product', {usuario: comentarios.comentarios.usuario , comentarios: comentarios.comentarios.mensaje, fotoPerfil: comentarios.comentarios.fotoPerfil});
    },
}

module.exports = productController;