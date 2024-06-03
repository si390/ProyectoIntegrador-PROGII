const db = {
    usuarios: [
        {
            nombre: "Juan",
            contraseña: "lock100",
            fechaNacimiento: "1970-12-12",
            email: "juan25@gmail.com",
            fotoPerfil: "/images/users/juan.jpg",
            dni: 35852150,
        },
        {
            nombre: "Maria",
            contraseña: "contra123",
            fechaNacimiento: "1985-12-12",
            email: "mariaperez@gmail.com",
            fotoPerfil: "/images/users/maria.jpg",
            dni: 4994939,
        },
        {
            nombre: "Baltazar",
            contraseña: "password",
            fechaNacimiento: "2004-12-12",
            email: "baltar@gmail.com",
            fotoPerfil: "/images/users/baltazar.jpg",
            dni: 23698540,
        },
        {
            nombre: "Agostina",
            contraseña: "micontraseña10",
            fechaNacimiento: "2004-12-12",
            email: "agos50@gmail.com",
            fotoPerfil: "/images/users/agostina.jpg",
            dni: 15783025,
        },
        {
            nombre: "Pedro",
            contraseña: "asdfgh",
            fechaNacimiento: "2004-12-12",
            email: "pedrolopez@gmail.com",
            fotoPerfil: "/images/users/pedro.jpg",
            dni: 52102580,
        },
    ],
    productos: [
        {
            id: 1,
            nombre: "Buzo Antisocial",
            descripcion: "¡Un buzo diseñado a tu medida!. Elegí el color que más te guste.",
            imagen: "/images/products/buzoantisocial.jpg",
            comentarios: [
                {
                    usuario: "Juan",
                    mensaje: "Soy antisocial, no lo niego, este buzo es lo que más necesitaba",
                    fotoPerfil: "/images/users/juan.jpg",
                },
                {
                    usuario: "Maria",
                    mensaje: "Buena calidad, buen producto",
                    fotoPerfil: "/images/users/maria.jpg",
                },
            ],
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
                    fotoPerfil: "/images/users/pedro.jpg",
                },
            ],
        },
        {
            id: 3,
            nombre: "Buzo Future",
            descripcion: "Lo que necesitás",
            imagen: "/images/products/buzofuture.jpg",
            comentarios: [
                {
                    usuario: "Baltazar",
                    mensaje: "Buenísimo!",
                    fotoPerfil: "/images/users/baltazar.jpg",
                },
            ],
        },
        {
            id: 4,
            nombre: "Buzo Butterfly",
            descripcion: "El mejor en años",
            imagen: "/images/products/buzobutterfly.jpg",
            comentarios: [
                {
                    usuario: "Agostina",
                    mensaje: "Básico, pero va bien",
                    fotoPerfil: "/images/users/agostina.jpg",
                },
                {
                    usuario: "Luis",
                    mensaje: "No me quejo, buena calidad-precio",
                    fotoPerfil: "/images/users/luis.jpg",
                },
                {
                    usuario: "Javier",
                    mensaje: "Necesito hacer una devolución",
                    fotoPerfil: "/images/users/javier.jpg",
                },
                {
                    usuario: "Cristina",
                    mensaje: "Se lo regalé a mi marido y le gustó",
                    fotoPerfil: "/images/users/cristina.jpg",
                },
                {
                    usuario: "Mauricio",
                    mensaje: "Para modelar",
                    fotoPerfil: "/images/users/mauricio.jpg",
                },
            ],
        },
        {
            id: 5,
            nombre: "Buzo Car",
            descripcion: "Tu mejor versión",
            imagen: "/images/products/buzocar.jpg",
            comentarios: [
                {
                    usuario: "Alberto",
                    mensaje: "Fue un regalo para mi nieto, le encantó",
                    fotoPerfil: "/images/users/alberto.jpg",
                },
            ],
        },
        {
            id: 6,
            nombre: "Buzo Chicago",
            descripcion: "Para cualquier temporada",
            imagen: "/images/products/buzochicago.jpg",
            comentarios: [
                {
                    usuario: "Nestor",
                    mensaje: "¿Hay algo que esta empresa no haga bien?",
                    fotoPerfil: "/images/users/nestor.jpg",
                },
                {
                    usuario: "Carlos",
                    mensaje: "¿Cómo debe lavarse?",
                    fotoPerfil: "/images/users/carlos.jpg",
                },
                {
                    usuario: "Alejandro",
                    mensaje: "Necesito dos",
                    fotoPerfil: "/images/users/alejandro.jpg",
                },
                {
                    usuario: "Benicio",
                    mensaje: "No me quedo la talla que pedi",
                    fotoPerfil: "/images/users/benicio.jpg",
                },
                {
                    usuario: "Martina",
                    mensaje: "Nada mal",
                    fotoPerfil: "/images/users/martina.jpg",
                },
            ],
        },
        {
            id: 7,
            nombre: "Buzo Eminem",
            descripcion: "No decepciona",
            imagen: "/images/products/buzoeminem.jpg",
            comentarios: [
                {
                    usuario: "Camila",
                    mensaje: "¿Tienen en talle m?",
                    fotoPerfil: "/images/users/camila.jpg",
                },
            ],
        },
        {
            id: 8,
            nombre: "Buzo King Of The Kongo",
            descripcion: "Lo querés, lo tenés",
            imagen: "/images/products/buzokingofthekongo.jpg",
            comentarios: [
                {
                    usuario: "Pilar",
                    mensaje: "Por supuesto que lo volvería a comprar",
                    fotoPerfil: "/images/users/pilar.jpg",
                },
            ],
        },
        {
            id: 9,
            nombre: "Buzo Los Angeles",
            descripcion: "Vibrá con él",
            imagen: "/images/products/buzolosangeles.jpg",
            comentarios: [
                {
                    usuario: "Victoria",
                    mensaje: "Una maravilla",
                    fotoPerfil: "/images/users/victoria.jpg",
                },
                {
                    usuario: "Karina",
                    mensaje: "Realmente esperaba algo mejor",
                    fotoPerfil: "/images/users/karina.jpg",
                },
                {
                    usuario: "Lorna",
                    mensaje: "No sé si el precio lo vale",
                    fotoPerfil: "/images/users/lorna.jpg",
                },
                {
                    usuario: "Patricia",
                    mensaje: "Un lujo",
                    fotoPerfil: "/images/users/patricia.jpg",
                },
                {
                    usuario: "Walter",
                    mensaje: "Fachaaa",
                    fotoPerfil: "/images/users/walter.jpg",
                },
            ],
        },
        {
            id: 10,
            nombre: "Buzo Red",
            descripcion: "El momento de impactar es ahora",
            imagen: "/images/products/buzored.jpg",
            comentarios: [
                {
                    usuario: "Gaspar",
                    mensaje: "No sé si realmente cumpla el objetivo de impactar, pero safa",
                    fotoPerfil: "/images/users/gaspar.jpg",
                },
            ],
        },
        {
            id: 11,
            nombre: "Buzo Tupac",
            descripcion: "Dalo todo",
            imagen: "/images/products/buzotupac.jpg",
            comentarios: [
                {
                    usuario: "Valeria",
                    mensaje: "No me pareció el mejor de la marca",
                    fotoPerfil: "/images/users/valeria.jpg",
                },
            ],
        },
        {
            id: 12,
            nombre: "Buzo Undefined",
            descripcion: "Para cualquier ocasión",
            imagen: "/images/products/buzoundefined.jpg",
            comentarios: [
                {
                    usuario: "Sebastian",
                    mensaje: "Buena calidad",
                    fotoPerfil: "/images/users/sebastian.jpg",
                },
                {
                    usuario: "Nicolas",
                    mensaje: "Regalo de cumple",
                    fotoPerfil: "/images/users/nicolas.jpg",
                },
                {
                    usuario: "Milagros",
                    mensaje: "Le encantó a mi novio",
                    fotoPerfil: "/images/users/milagros.jpg",
                },
                {
                    usuario: "Daddy",
                    mensaje: "Fachero",
                    fotoPerfil: "/images/users/daddy.jpg",
                },
                {
                    usuario: "Baby",
                    mensaje: "Una locura el precio",
                    fotoPerfil: "/images/users/baby.jpg",
                },
                {
                    usuario: "Mabel",
                    mensaje: "Me encantó el producto",
                    fotoPerfil: "/images/users/mabel.jpg",
                },
                {
                    usuario: "Valentina",
                    mensaje: "Fabuloso",
                    fotoPerfil: "/images/users/valentina.jpg",
                },
            ],
        },
    ],
};

module.exports = db;