const basedatos = {

    usuarios: {
        nombre: "nombre", 
        contraseña: "contraseña",
        fechaNacimiento: "2004-12-12",
        email: "email@gmail.com",
        fotoPerfil: "/images/users/default-image.png",
        dni: 4994939,
    },

    productos: {
        lista: [
            {
                id: 1,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "buzoantisocial.jpg",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    },
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },
                ]
            },
            {
                id: 2,
                nombre: "Producto",
                descripcion: "Descripción",
                imagen: "buzoastroworld.jpg",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "No me gustó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
            {
                id: 3, 
                nombre: "Producto",
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
                    },]
            },
        ]
    }
};

module.exports = basedatos;
