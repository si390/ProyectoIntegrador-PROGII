const db = require('../database/models');
const { Op } = db.Sequelize;
const { validationResult } = require("express-validator");

const Product = db.Product;

const Controller = {
    index: async (req, res) => {
        try {
            const products = await Product.findAll({
                include: [
                    { model: db.Comentario, as: 'comentarios' },
                    { model: db.Usuario, as: 'usuario' } 
                ]
            });

            const user = req.session.user; 

            res.render('index', { products, user }); 
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).send("Error fetching products");
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await db.Product.findAll();
            const user = req.session.user;

            res.render('index', { products, user }); 
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).send('Error fetching products');
        }
    },

    detail: async (req, res) => {
        const productId = parseInt(req.params.id);

        try {
            const producto = await Product.findByPk(productId, {
                include: [
                    { model: db.Comentario, as: 'comentarios', include: { model: db.Usuario } },
                    { model: db.Usuario, as: 'usuario' }
                ]
            });

            if (producto) {
                res.render('product', { producto });
            } else {
                res.render('product', { error: "Producto no encontrado." });
            }
        } catch (error) {
            res.render('product', { error: "Error al mostrar el detalle del producto." });
        }
    },

    editar: async (req, res) => {
        const usuarioId = req.session.user.id;
        const productoId = req.params.id;

        try {
            const producto = await Product.findOne({
                where: {
                    id: productoId,
                    usuario_Id: usuarioId
                },
                include: [
                    { model: db.Usuario, as: 'usuario' }
                ]
            });

            if (producto) {
                res.render('product-edit', { producto });
            } else {
                res.render('product-edit', { error: "No tienes permiso para editar este producto." });
            }
        } catch (error) {
            res.render('product-edit', { error: "Error al cargar el producto." });
        }
    },

    borrar: async (req, res) => {
        const usuarioId = req.session.user.id;
        const productoId = req.params.id;

        try {
            const result = await Product.destroy({
                where: {
                    id: productoId,
                    usuario_Id: usuarioId
                }
            });

            if (result) {
                res.redirect('/');
            } else {
                res.render('index', { error: "No tienes permiso para borrar este producto." });
            }
        } catch (error) {
            res.render('index', { error: "Error al borrar el producto." });
        }
    },

    productAdd: {
        crearProducto: async (req, res) => {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('product-add', { 
                    errors: errors.mapped(),
                    old: req.body
                });
            }

            try {
                await Product.create({
                    imagen: req.body.imagen,
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    color: req.body.color,
                    usuario_Id: req.session.user.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
                res.redirect('/');
            } catch (error) {
                res.render('product-add', { 
                    error: "Error al agregar el producto",
                    old: req.body
                });
            }
        }
    },

    search: {
        busqueda: async (req, res) => {
            const { query } = req.query;

            try {
                const productos = await Product.findAll({
                    where: {
                        nombre: {
                            [Op.like]: `%${query}%`
                        }
                    },
                    include: [{ model: db.Usuario, as: 'usuario' }]
                });

                res.render('search-results', { productos });
            } catch (error) {
                res.render('search-results', { error: "Error al buscar productos." });
            }
        }
    }
};

module.exports = Controller;