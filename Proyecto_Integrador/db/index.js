const basedatos = {

    usuarios: {
        lista: [{
            nombre: "Juan",
            contraseña: "lock100",
            fechaNacimiento: "2004-12-12",
            email: "juan25@gmail.com",
            fotoPerfil: "/images/users/default-image.png",
            dni: 35852150,
        },
        {
            nombre: "Maria",
            contraseña: "contra123",
            fechaNacimiento: "2004-12-12",
            email: "mariaperez@gmail.com",
            fotoPerfil: "/images/users/default-image.png",
            dni: 4994939,
        },
        {
            nombre: "Baltazar",
            contraseña: "password",
            fechaNacimiento: "2004-12-12",
            email: "baltar@gmail.com",
            fotoPerfil: "/images/users/default-image.png",
            dni: 23698540,
        },
        {
            nombre: "Agostina",
            contraseña: "micontraseña10",
            fechaNacimiento: "2004-12-12",
            email: "agos50@gmail.com",
            fotoPerfil: "/images/users/default-image.png",
            dni: 15783025,
        },
        {
            nombre: "Pedro",
            contraseña: "asdfgh",
            fechaNacimiento: "2004-12-12",
            email: "pedrolopez@gmail.com",
            fotoPerfil: "/images/users/default-image.png",
            dni: 52102580,
        },
        ]
    },

    productos: {
        lista: [
            {
                id: 1,
                nombre: "Buzo Antisocial",
                descripcion: "Un buzo diseñado a tu medida",
                imagen: "buzoantisocial.jpg",
                comentarios: [
                    {
                        usuario: "Juan",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "default-image.png"
                    },
                    {
                        usuario: "Maria",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "default-image.png"
                    },
                ]
            },
            {
                id: 2,
                nombre: "Buzo AreoWorld",
                descripcion: "Un buzo para todos",
                imagen: "buzoastroworld.jpg",
                comentarios: [
                    {
                        usuario: "Pedro",
                        mensaje: "No me gustó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
            {
                id: 3,
                nombre: "Buzo Eminem",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "Usuario",
                        mensaje: "Buenísimo!",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
            {
                id: 4,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },
                    {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
            {
                id: 5,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },]
            },
            {
                id: 6,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
            {
                id: 7,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "./maqueta/images/products/astroworld.jpg",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "¿Tienen en talle m?",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },]
            },
            {
                id: 8,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "default-image.png"
                    },]
            },
            {
                id: 9,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
            {
                id: 10,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },]
            },
            {
                id: 11,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },]
            },
            {
                id: 12,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "/images/products/default-image.png",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    }, {
                        usuario: "Usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
        ]
    }
};

module.exports = basedatos;
