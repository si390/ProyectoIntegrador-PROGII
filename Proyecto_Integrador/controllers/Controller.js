const db = require('../database/models');
const { Op } = db.Sequelize;
const { validationResult } = require("express-validator");

const Controller = {
    index: {
        mostrarIndex : async (req, res) => {
            try {
                const novedades = await db.Product.findAll({
                    order: [['createdAt', 'DESC']],
                    limit: 10,
                    include: [{ association: "usuario" }],
                });
        
                const masComentados = await db.Product.findAll({
                    include: [
                        { association: "usuario" },
                        { association: "comentarios" }
                    ],
                    order: [[db.Sequelize.fn('COUNT', db.Sequelize.col('comentarios.id')), 'DESC']],
                    group: ['Product.id'],
                    limit: 10,
                });
        
                res.render('index', { novedades, masComentados, user: req.session.user });
            } catch (error) {
                console.error(error);
                res.render('index', { error: "Error al mostrar los productos", novedades: [], masComentados: [], user: req.session.user });
            }
        }},

    detail: {
    
        detail: {
            detalle: function(req, res) {
                const productId = parseInt(req.params.id);
    
                try {
                    const producto = db.Product.findByPk(productId, {
                        include: [
                            { association: "comentarios", include: { association: "usuario" } },
                            { association: "usuario" }
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
            }
        },
        
        editar:  function (req, res) {
                const usuarioId = req.session.userId;
                const productoId = req.params.id;
                
                try {
                    const producto = db.Product.findOne({
                        where: {
                            id: productoId,
                            usuarioId: usuarioId
                        }
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

        borrar:  function (req, res) {
                const usuarioId = req.session.userId;
                const productoId = req.params.id;
            
                try {
                    const result =  db.Product.destroy({
                        where: {
                            id: productoId,
                            usuarioId: usuarioId
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
            }
        },


        productAdd: {
            crearProducto:  function (req, res) {
                let errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.render('product-add', { 
                        errors: errors.mapped(),
                        old: req.body
                    });
                }
        
                try {
                    const newProduct =  db.Product.create({
                        imagen: req.body.imagen,
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion,
                        usuarioId: req.session.user.id,
                        created_at: new Date(),
                        updated_at: new Date()
                    });
                    res.redirect('/');
                } catch (error) {
                    res.render('product-add', { 
                        error: "Error al agregar el producto",
                        old: req.body
                    });
                }
            },
    search:{

        busqueda: function (req, res) {
            const { query } = req.query;
        
            try {
                const productos =  db.Product.findAll({
                    where: {
                        name: {
                            [Op.like]: `%${query}%`
                        }
                    },
                    include: [{ association: "usuario" }]
                });
        
                res.render('search-results', { productos });
            } catch (error) {
                res.render('search-results', { error: "Error al buscar productos." });
            }
        }    
    }
}}
module.exports = Controller