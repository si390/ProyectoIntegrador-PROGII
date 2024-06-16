CREATE SCHEMA proyectointegradorfinal;
USE proyectointegradorfinal;


CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,  
    fecha DATE NOT NULL,  
    dni INT UNIQUE NOT NULL,
    foto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL 
);


CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,  
    descripcion VARCHAR(255) NOT NULL,  
    color VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL, 


    usuario_id INT UNSIGNED,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


CREATE TABLE comentarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL, 
    producto_id INT UNSIGNED NOT NULL, 
    texto VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL, 

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);


INSERT INTO usuarios (nombre, email, contrasenia, fecha, dni, foto)
VALUES
("Agostina Rios", "agosrios@gmail.com", "contraseña1", '1993-02-19', 99999999, "/images/users/agostina.jpg"),
("Alberto Olmedo", "alolmedo@gmail.com", "contraseña2", '1982-03-24', 33658954, "/images/users/alberto.jpg"),
("Alejandro Lerner", "alelerner@gmail.com", "contraseña3", '2003-07-18', 22548902, "/images/users/alejandro.jpg"),
("Baby Etchecopar", "baby5@gmail.com", "contraseña4", '1996-10-14', 10257836, "/images/users/baby.jpg"),
("Baltazar Carusso", "baltocar@gmail.com", "contraseña5", '2001-07-06', 45856321, "/images/users/baltazar.jpg"),
("Benicio Grazzi", "benigr@gmail.com", "contraseña1", '1993-02-19', 1234567, "/images/users/benicio.jpg"),
("Camila Ford", "camiford@gmail.com", "contraseña2", '1982-03-24', 23245687, "/images/users/camila.jpg"),
("Carlos Perez", "carlospe@gmail.com", "contraseña3", '2003-07-18', 3325468, "/images/users/carlos.jpg"),
("Cristina Roble", "crisrob@gmail.com", "contraseña4", '1996-10-14', 1548762, "/images/users/cristina.jpg"),
("Daddy", "daddy@gmail.com", "contraseña5", '2001-07-06', 12470200, "/images/users/daddy.jpg"),
("Gaspar Ayuso", "gaspayu@gmail.com", "contraseña4", '1996-10-14', 13920420, "/images/users/gaspar.jpg"),
("Javier Chau", "javich@gmail.com", "contraseña5", '2001-07-06', 95212233, "/images/users/javier.jpg"),
("Juan Soto", "jusoto@gmail.com", "contraseña1", '1993-02-19', 6542236, "/images/users/juan.jpg"),
("Karina Jimenez", "karimenez@gmail.com", "contraseña2", '1982-03-24', 8552342, "/images/users/karina.jpg"),
("Lorna Williams", "lwilliams@gmail.com", "contraseña3", '2003-07-18', 3232145, "/images/users/lorna.jpg"),
("Luis Prescott", "luisp@gmail.com", "contraseña4", '1996-10-14', 3458772, "/images/users/luis.jpg"),
("Mabel Collins", "mcollins1@gmail.com", "contraseña5", '2001-07-06', 2102688, "/images/users/mabel.jpg"),
("Maria Ryan", "maryan@gmail.com", "contraseña4", '1996-10-14', 20786321, "/images/users/maria.jpg"),
("Martina Schino", "martisch@gmail.com", "contraseña5", '2001-07-06', 126888, "/images/users/martina.jpg"),
("Mauricio Fernandez", "maurifer@gmail.com", "contraseña1", '1993-02-19', 7525265, "/images/users/mauricio.jpg"),
("Milagros Rey", "milirey@gmail.com", "contraseña2", '1982-03-24', 6325586, "/images/users/milagros.jpg"),
("Nestor Piazolla", "nestorp@gmail.com", "contraseña3", '2003-07-18', 5742202, "/images/users/nestor.jpg"),
("Nicolas Grey", "nicogr@gmail.com", "contraseña4", '1996-10-14', 3005822, "/images/users/nicolas.jpg"),
("Patricia Monroe", "pato1monroe@gmail.com", "contraseña5", '2001-07-06', 5478520, "/images/users/patricia.jpg"),
("Pedro Fozzi", "pfozzi4@gmail.com", "contraseña4", '1996-10-14', 4578200, "/images/users/pedro.jpg"),
("Sebastian Lopez", "sebalopez5@gmail.com", "contraseña5", '2001-07-06', 40369712, "/images/users/sebastian.jpg"),
("Pilar Attias", "piliatto2@gmail.com", "contraseña1", '1993-02-19', 8515000, "/images/users/pilar.jpg"),
("Valentina Zerene", "valenz9@gmail.com", "contraseña2", '1982-03-24', 1115563, "/images/users/valentina.jpg"),
("Valeria Mazza", "vmazza@gmail.com", "contraseña3", '2003-07-18', 22536700, "/images/users/valeria.jpg"),
("Victoria Lagos", "vicky60@gmail.com", "contraseña4", '1996-10-14', 11230088, "/images/users/victoria.jpg"),
("Walter Giardino", "wgiardino8@gmail.com", "contraseña5", '2001-07-06', 6200146, "/images/users/walter.jpg");


INSERT INTO productos (nombre, descripcion, color)
VALUES
("Buzo Red", "Cómodo buzo color blanco y rojo.", "Rojo"),
("Buzo Butterfly", "Buzo con explosión visual.", "Blanco"),
("Buzo Car", "Buzo inspirado en la serie de Fast and Furious.", "Blanco"),
("Buzo Future", "Buzo en tendencia con tela extra suave.", "Verde"),
("Buzo Eminem", "Buzo inspirado en el albúm de Eminem", "Blanco"),
("Buzo Astrowold", "Buzo con colores vibrantes", "Beige"),
("Buzo King of the Kongo", "Hermoso buzo Buenos Aires a la moda", "Azul"),
("Buzo Tupac", "Buzo inspirado en el gran artista Tupac", "Naranja"),
("Buzo Undefined", "Buzo de gran calidad, nueva colección undefined.", "Negro"),
("Buzo Los Ángeles", "Buzo estilo oversize de gran calidad.", "Marrón");


INSERT INTO comentarios (usuario_id, producto_id, texto)
VALUES
(1, 1, 'Me gustó mucho el producto. Tienen muy buena calidad y diseños :))))))))'),
(2, 2, 'Tienen en rojo?'),
(3, 3, '¿De qué es la tela?'),
(1, 4, 'Lo recomiendo'),
(2, 5, 'Me gustó'),
(3, 6, 'Me encantó'),
(4, 7, 'Lo recomendaría'),
(5, 8, 'Excelente producto'),
(3, 9, 'Me gustó muchísimo!!!'),
(6, 10, 'Muy fachero'),
(7, 1, 'Muy buena calidad!!!'),
(8, 2, 'Me encantó, lo amé :))))'),
(9, 3, 'Los amo, hagan más diseños'),
(10, 4, 'Muy buena calidad y diseños'),
(11, 5, 'Super cómodo'),
(12, 6, 'Excelente producto, me encantó y lo compraría mil y una veces más <3<3<3'),
(13, 7, 'Excelente!!'),
(14, 8, 'Ameeeee'),
(15, 9, 'Hermoso'),
(16, 10, '¿Hacen envíos a Chile?'),
(17, 1, 'no me gustó'),
(18, 2, 'Me molesta no poder comprarme todos!'),
(19, 3, 'Quiero todos!!!!!!!'),
(20, 4, 'Me lo voy a autoregalar'),
(21, 5, 'Son super calentitos<3<3<3<3'),
(22, 6, 'Excelente producto'),
(23, 7, 'Amé las ofertas'),
(24, 8, 'Lo recomiendooooooooo'),
(25, 9, 'malísimo'),
(26, 10, 'Colores super llamativos :))');