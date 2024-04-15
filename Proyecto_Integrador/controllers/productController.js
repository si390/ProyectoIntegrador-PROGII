const products = require('../db/index');

const usuario = products.perfil;
const productos = products.productos.lista;

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
    let comentario;
    for (let i = 0; i < comentario.length; i++) {
      if (productos[i].comentarios == req.params.comentarios) {
        comentario = productos[i];
      }
    }

    if (req.params.ok == "ok") {
      return res.render('product-add', { title: "Comentario de producto", producto: comentario, ok: true });
    } else {
      return res.render('product-add', { title: "Comentario de producto", producto: comentario, ok: false });
    }
  }
};

module.exports = productController;