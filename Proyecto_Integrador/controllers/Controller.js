const datos = require('../db/index');
const db = require('../database/models');
const op = db.Sequelize.Op;
const {validationResult} =require("express-validator");

const Controller = {

    mostrarIndex: function(req, res) {                               /*agregar include con comentarios*/
        db.Product.findAll({
            order: ['created_at', 'DESC'], 
            limit: 10 ,
            include:[ {association: "comentarios"},]
        })
        .then(function(productos) {
            return res.render('index', { productos: productos });
        })
        .catch(function(error) {
            return res.render("index", { error: "Error al mostrar el catálogo" });
        });
    },
    
    detalleProducto: function(req, res){

        if () {
            
        } else {
            
        }
    }


       /* const productos = datos.productos;
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
    
    detalle: function(req, res) {
        const productId = parseInt(req.params.id);
        const producto = datos.productos.find(p => p.id === productId);

        if (producto) {
            return res.render('product', {
                id: producto.id,
                nombre: producto.nombre,
                fotoproducto: producto.imagen,
                descripcion: producto.descripcion,
                comentarios: producto.comentarios,
            });
        } else {
            res.status(404).send('Product not found');
        }
    }

     search: function(req, res) {
        const query = req.query.q;
        const resultados = datos.productos.filter(p => 
            p.nombre.includes(query) || p.descripcion.includes(query)
        );

        return res.render('search-results', { resultados: resultados });
    },    


    mostrarProducto: function(req, res) {
        const producto = datos.productos;

        return res.render('product-add', {
            nombre: producto.nombre,
            fotoproducto: producto.imagen,
            descripcioncorta: producto.descripcion
        });
    },*/

   
};

module.exports = Controller;