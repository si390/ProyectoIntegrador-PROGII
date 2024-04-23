CREATE SCHEMA proyectointegrador;

CREATE TABLE usuarios(
	id int unsigned primary key auto_increment,
	nombre varchar(100) not null,
	email varchar(100) not null, 
	contraseña varchar(12) not null,
	fecha datetime not null,
	dni int unique not null, 
	foto text,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE productos(
	id INT UNSIGNED PRIMARY KEY auto_increment,
    nombr_imagen INT NOT NULL,
    nombre VARCHAR(100),
    descripcion VARCHAR(100) NOT NULL,
	color varchar(100) NOT NULL,
    
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAT TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (nombre) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
	id INT PRIMARY KEY auto_increment,
    usuario VARCHAR(100) NOT NULL,
    texto VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id) REFERENCES productos(id)
);

INSERT INTO usuarios
values
(DEFAULT, "Rene Ryan", "user1@gmail.com", "contraseña1", 1993-02-19, 99999999, "/images/users/default-image.png"),
(DEFAULT, "Michele Ford", "user2@gmail.com", "contraseña2", 1982-03-24, 33658954, "/images/users/default-image.png"),
(DEFAULT, "Elijah Jimenez", "user3@gmail.com", "contraseña3", 2003-07-18, 22548902, "/images/users/default-image.png"),
(DEFAULT, "Don Prescott", "user4@gmail.com", "contraseña4", 1996-10-14, 10257836, "/images/users/default-image.png"),
(DEFAULT, "Terry Collins", "user5@gmail.com", "contraseña5", 2001-07-06, 45856321, "/images/users/default-image.png");

INSERT INTO productos
values
(DEFAULT, DEFAULT, "Buzo Red", "Cómodo buzo color blanco y rojo.","Rojo"),
(DEFAULT, DEFAULT, "Buzo Butterfly", "Buzo con explosión visual.","Blanco"),
(DEFAULT, DEFAULT, "Buzo Car", "Buzo inspirado en la serie de Fast and Furious.","Blanco"),
(DEFAULT, DEFAULT, "Buzo Future", "Buzo en tendencia con tela extra suave.","Verde"),
(DEFAULT, DEFAULT, "Buzo Eminem", "Buzo inspirado en el albúm de Eminem","blanco"),
(DEFAULT, DEFAULT, "Buzo Astrowold", "Buzo con colores vibrantes","Beige"),
(DEFAULT, DEFAULT, "Buzo King of the Kongo", "Hermoso buzo Buenos Aires a la moda","Azul"),
(DEFAULT, DEFAULT, "Buzo Tupac", "Buzo inspirado en el gran artista Tupac","Naranja"),
(DEFAULT, DEFAULT, "Buzo Undefined", "Buzo de gran calidad, nueva colección undefined.","Negro"),
(DEFAULT, DEFAULT, "Buzo Los Ángeles", "Buzo estilo oversize de gran calidad.","Marrón");

INSERT INTO comentarios
values
(DEFAULT, 'Diego Salischiker', 'Me gustó mucho el producto. Tienen muy buena calidad y diseños :))))))))'), 
(DEFAULT, 'Laura María', 'Tienen en rojo?'),
(DEFAULT, "Antonia Antonels", "¿De qué es la tela?"),

(DEFAULT,"Rene Ryan","Lo recomiendo"),
(DEFAULT, "Michele Ford", "Me gustó"),
(DEFAULT, "Elijah Jimenez", "Me encantó"),

(DEFAULT, 'María Rodríguez', 'Lo recomendaría'), 
(DEFAULT, 'Carlos González', 'Excelente producto'),
(DEFAULT, "Elijah Jimenez", "Me gustó muchísimo!!!"),

(DEFAULT, 'Sol Martinez', 'Muy fachero'), 
(DEFAULT, 'Carlos Berto', 'Muy buena calidad!!!'),
(DEFAULT, "Lionel Messi", "Me encantó, lo amé :))))"),

(DEFAULT, 'Sabrina Lopez', 'Los amo, hagan más diseños'), 
(DEFAULT, 'Sabrina Carpenter', 'Muy buena calidad y diseños'),
(DEFAULT, "Natalia Margarita", "Super cómodo"),

(DEFAULT, 'Milagros Marquez', 'Excelente producto, me encantó y lo compraría mil y una veces más <3<3<3'), 
(DEFAULT, 'Juan Ezequiel', 'Excelente!!'),
(DEFAULT, "Laura Jimenez", "Ameeeee"),

(DEFAULT, 'Jessica Bler', 'Hermoso'), 
(DEFAULT, 'Malena Garzia', '¿Hacen envíos a Chile?'),
(DEFAULT, "Ian Bon", "no me gustó"),

(DEFAULT, 'María Marta', 'Me molesta no poder comprarme todos!'), 
(DEFAULT, 'Lucia Luciani', 'Quiero todos!!!!!!!'),
(DEFAULT, "Lara Ven", "Me lo voy a autoregalar"),

(DEFAULT, 'Lucas Faiad', 'Son super calentitos<3<3<3<3'), 
(DEFAULT, 'Santiago Santini', 'Excelente producto'),
(DEFAULT, "Marcos Marcocini", "Amé las ofertas"),

(DEFAULT, 'Marzía Rodrígues', 'Lo recomiendooooooooo'), 
(DEFAULT, 'Leonardo Juan', 'malísimo'),
(DEFAULT, "Macarena Maca", "Colores super llamativos :))");
