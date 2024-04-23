const basedatos = {

    usuarios: {
        lista: [{
            nombre: "Juan",
            contraseña: "lock100",
            fechaNacimiento: "1970-12-12",
            email: "juan25@gmail.com",
            fotoPerfil: "/images/users/juan.png",
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
                imagen: "/images/products/buzoantisocial.jpg",
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
                imagen: "/images/products/buzoastroworld.jpg",
                comentarios: [
                    {
                        usuario: "Pedro",
                        mensaje: "No me gustó el producto",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
            {
                id: 3,
                nombre: "Buzo Future",
                descripcion: "Descripción",
                imagen: "/images/products/buzofuture.jpg",
                comentarios: [
                    {
                        usuario: "Usuario",
                        mensaje: "Buenísimo!",
                        fotoPerfil: "/images/users/default-image.png"
                    },]
            },
            {
                id: 4,
                nombre: "Buzo Butterfly",
                descripcion: "Descripción",
                imagen: "/images/products/buzobutterfly.jpg",
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
                nombre: "Buzo Car",
                descripcion: "Descripción",
                imagen: "/images/products/buzocar.jpg",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },]
            },
            {
                id: 6,
                nombre: "Buzo Chicago",
                descripcion: "Descripción",
                imagen: "/images/products/buzochicago.jpg",
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
                nombre: "Buzo Eminem",
                descripcion: "Descripción",
                imagen: "/images/products/buzoeminem.jpg",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "¿Tienen en talle m?",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },]
            },
            {
                id: 8,
                nombre: "Buzo King Of The Kongo",
                descripcion: "Descripción",
                imagen: "/images/products/buzokingofthekongo.jpg",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "default-image.png"
                    },]
            },
            {
                id: 9,
                nombre: "Buzo Los Angeles",
                descripcion: "Descripción",
                imagen: "/images/products/buzolosangeles.jpg",
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
                nombre: "Buzo Red",
                descripcion: "Descripción",
                imagen: "/images/products/buzored.jpg",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },]
            },
            {
                id: 11,
                nombre: "Buzo Tupac",
                descripcion: "Descripción",
                imagen: "/images/products/buzotupac.jpg",
                comentarios: [
                    {
                        usuario: "usuario",
                        mensaje: "Me encantó el producto",
                        fotoPerfil: "./maqueta/users/default-image.png"
                    },]
            },
            {
                id: 12,
                nombre: "Buzo Undefined",
                descripcion: "Descripción",
                imagen: "/images/products/buzoundefined.jpg",
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
