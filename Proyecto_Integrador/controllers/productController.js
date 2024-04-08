const products = require('../db/index');

const usuario = products.usuario;
const productos = products.productos;

const productController = {
  usuario: function (req, res) {
    return res.render('index', { title: "Home", usuario: usuario });
  },
  producto: function (req, res) {
    let producto;
    for (let i = 0; i < producto.length; i++) {
      if (productos[i].nombre == req.params.nombre) {
        producto = productos[i];
      }
    }

    return res.render('product', { title: "Detalle Productos", producto: producto });
  },
  comentario: function (req, res) {
    let producto;
    for (let i = 0; i < producto.length; i++) {
      if (productos[i].comentarios == req.params.comentarios) {
        producto = productos[i];
      }
    }

    if (req.params.ok == "ok") {
      return res.render('product-add', { title: "Comentario de producto", producto: producto, ok: true });
    } else {
      return res.render('product-add', { title: "Comentario de producto", producto: producto, ok: false });
    }
  }
};

module.exports = productController;