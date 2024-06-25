const db = require('../database/models');
const { Op } = db.Sequelize;
const { validationResult } = require("express-validator");

const Product = db.Product;
const Usuario = db.Usuario;
const Comentario = db.Comentario;

const Controller = {
    index: (req, res) => {
        Product.findAll({
            include: [
                { model: Comentario, as: 'comentarios' },
                { model: Usuario, as: 'usuario' }
            ],
            order: [['createdAt', 'DESC']]
        })
        .then(products => {
            const user = req.session.user;
            res.render('index', { products, user });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            res.status(500).send("Error fetching products");
        });
    },

    getAllProducts: (req, res) => {
        Product.findAll()
        .then(products => {
            const user = req.session.user;
            res.render('index', { products, user });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            res.status(500).send('Error fetching products');
        });
    },

    detail: (req, res) => {
        const productId = parseInt(req.params.id);

        Product.findByPk(productId, {
            })
        .then(producto => {
            if (producto) {
                res.render('product', { producto });
            } else {
                res.render('product', { error: "Producto no encontrado." });
            }
        })
        .catch(error => {
            console.error("Error al mostrar los productos:", error);
            res.render('product', { error: "Error al mostrar el detalle del producto." });
        });
    },

    editar: (req, res) => {
        const user = req.session.user;
        if (!user) {
            return res.render('product-add', { error: "Usuario no autenticado." });
        }

        const usuarioId = user.id;
        const productoId = req.params.id;

        Product.findOne({
            where: {
                id: productoId,
                usuario_Id: usuarioId
            },
            include: [
                { model: Usuario, as: 'usuario' }
            ]
        })
        .then(producto => {
            if (producto) {
                res.render('product-add', { producto });
            } else {
                res.render('product-add', { error: "No tienes permiso para editar este producto." });
            }
        })
        .catch(error => {
            res.render('product-add', { error: "Error al cargar el producto." });
        });
    },

    borrar: (req, res) => {
        const user = req.session.user;
        if (!user) {
            return res.render('index', { error: "Usuario no autenticado." });
        }

        const usuarioId = user.id;
        const productoId = req.params.id;

        Product.destroy({
            where: {
                id: productoId,
                usuario_Id: usuarioId
            }
        })
        .then(result => {
            if (result) {
                res.redirect('/');
            } else {
                res.render('index', { error: "No tienes permiso para borrar este producto." });
            }
        })
        .catch(error => {
            res.render('index', { error: "Error al borrar el producto." });
        });
    },

    productAdd: {
        renderizarProductAdd: (req, res) => {
            const productId = req.params.id;

            Product.findByPk(productId)
            .then(producto => {
                res.render('product-add', { producto, errors: {}, old: {} });
            })
            .catch(error => {
                console.error("Error al cargar el producto:", error);
                res.render('product-add', { error: "Error al cargar el producto.", errors: {}, old: {} });
            });
        },

        crearProducto: (req, res) => {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('product-add', { 
                    errors: errors.mapped(),
                    old: req.body,
                    producto: null
                });
            }

            Product.create({
                imagen: req.body.imagen,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                color: req.body.color,
                usuario_Id: req.session.user.id,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .then(newProduct => {
                res.render('product-add', { 
                    producto: newProduct, 
                    errors: {}, 
                    old: {} 
                });
            })
            .catch(error => {
                res.render('product-add', { 
                    error: "Error al agregar el producto",
                    errors: {}, 
                    old: req.body,
                    producto: null
                });
            });
        }
    },

    search: {
        busqueda: (req, res) => {
            const { query } = req.query;

            Product.findAll({
                where: {
                    nombre: {
                        [Op.like]: `%${query}%`
                    }
                },
                include: [
                    { association: 'usuario' },
                    { association: 'comentarios', include:[{association:'usuario'}]},
    
            ]})
            .then(productos => {
                res.render('search-results', { productos });
            })
            .catch(error => {
                res.render('search-results', { error: "Error al buscar productos." });
            });
        }
    }
};

module.exports = Controller;