CREATE SCHEMA proyectointegradorfinal;
USE proyectointegradorfinal;


CREATE TABLE usuarios (
    Id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    nombre VARCHAR(255),
    email VARCHAR(255),
    contrasenia VARCHAR(255),
    fecha INT,
    dni INT,
    fotoPerfil VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE productos (
    Id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagen VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    color VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    usuario_Id INT UNSIGNED,
    FOREIGN KEY (usuario_Id) REFERENCES usuarios(Id)
);


CREATE TABLE comentarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL, 
    producto_id INT UNSIGNED NOT NULL, 
    texto VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL, 

    FOREIGN KEY (usuario_Id) REFERENCES usuarios(Id),
    FOREIGN KEY (producto_Id) REFERENCES productos(Id)
);


INSERT INTO usuarios (username, nombre, email, contrasenia, fecha, dni, fotoPerfil) 
VALUES
("agosrios25","Agostina Rios", "agosrios@gmail.com", "dndfksoe", 19930219, 99999999, "/images/users/agostina.jpg"),
("albertol13","Alberto Olmedo", "alolmedo@gmail.com", "sdwdvb12", 19820324, 33658954, "/images/users/alberto.jpg"),
("ale12lerner","Alejandro Lerner", "alelerner@gmail.com", "sdas28c", 20030718, 22548902, "/images/users/alejandro.jpg"),
("baby45","Baby Etchecopar", "baby5@gmail.com", "ewfwegmm25", 19961014, 10257836, "/images/users/baby.jpg"),
("balto80","Baltazar Carusso", "baltocar@gmail.com", "wqergs90", 20010706, 45856321, "/images/users/baltazar.jpg"),
("benig950","Benicio Grazzi", "benigr@gmail.com", "vmnbkfg21", 19930219, 1234567, "/images/users/benicio.jpg"),
("camif75","Camila Ford", "camiford@gmail.com", "5d4fsdfnu", 19820324, 23245687, "/images/users/camila.jpg"),
("cperez45","Carlos Perez", "carlospe@gmail.com", "9dsf1ggd", 20030718, 3325468, "/images/users/carlos.jpg"),
("croble968","Cristina Roble", "crisrob@gmail.com", "mnkh875", 19961014, 1548762, "/images/users/cristina.jpg"),
("da820","Daddy", "daddy@gmail.com", "mi85dlei", 20010706, 12470200, "/images/users/daddy.jpg"),
("gaspi100","Gaspar Ayuso", "gaspayu@gmail.com", "fei5snm", 19961014, 13920420, "/images/users/gaspar.jpg"),
("javo76","Javier Chau", "javich@gmail.com", "t1n1ckk", 20010706, 95212233, "/images/users/javier.jpg"),
("janso93","Juan Soto", "jusoto@gmail.com", "d8u2sa", 19930219, 6542236, "/images/users/juan.jpg"),
("karijs8","Karina Jimenez", "karimenez@gmail.com", "familds44", 19820324, 8552342, "/images/users/karina.jpg"),
("lw63a","Lorna Williams", "lwilliams@gmail.com", "gagsjd495", 20030718, 3232145, "/images/users/lorna.jpg"),
("lpro682","Luis Prescott", "luisp@gmail.com", "sarkfmb02", 19961014, 3458772, "/images/users/luis.jpg"),
("mabel12","Mabel Collins", "mcollins1@gmail.com", "passwodj58", 20010706, 2102688, "/images/users/mabel.jpg"),
("marury89","Maria Ryan", "maryan@gmail.com", "mvdjdjsoy2", 19961014, 20786321, "/images/users/maria.jpg"),
("martu69z","Martina Schino", "martisch@gmail.com", "hol4885a", 20010706, 126888, "/images/users/martina.jpg"),
("mfer714","Mauricio Fernandez", "maurifer@gmail.com", "qwufjv78", 19930219, 7525265, "/images/users/mauricio.jpg"),
("milirey02","Milagros Rey", "milirey@gmail.com", "hallel54", 19820324, 6325586, "/images/users/milagros.jpg"),
("asti54","Astor Piazzolla", "astorp@gmail.com", "obadma4v4", 20030718, 5742202, "/images/users/nestor.jpg"),
("nico007","Nicolas Grey", "nicogr@gmail.com", "csdbind15", 19961014, 3005822, "/images/users/nicolas.jpg"),
("pato12s","Patricia Monroe", "pato1monroe@gmail.com", "szizjs87", 20010706, 5478520, "/images/users/patricia.jpg"),
("pedro028","Pedro Fozzi", "pfozzi4@gmail.com", "wovb2c5", 19961014, 4578200, "/images/users/pedro.jpg"),
("seba0358","Sebastian Lopez", "sebaslopez5@gmail.com", "mbfopepl5", 20010706, 40369712, "/images/users/sebastian.jpg"),
("pili863","Pilar Attias", "piliatto2@gmail.com", "cpekfmjdte2", 19930219, 8515000, "/images/users/pilar.jpg"),
("valezene30","Valentina Zerene", "valenz9@gmail.com", "ajdsdjjfk3", 19820324, 1115563, "/images/users/valentina.jpg"),
("vale49","Valeria Mazza", "vmazza@gmail.com", "fg8sd6v2", 20030718, 22536700, "/images/users/valeria.jpg"),
("vicky99","Victoria Lagos", "vicky60@gmail.com", "abidm98v", 19961014, 11230088, "/images/users/victoria.jpg"),
("walter740","Walter Giardino", "wgiardino8@gmail.com", "cs28df5", 20010706, 6200146, "/images/users/walter.jpg");


INSERT INTO productos (nombre, imagen, descripcion, color)
VALUES
("Buzo Red", "/images/products/buzored.jpg","Cómodo buzo color blanco y rojo.", "Rojo"),
("Buzo Butterfly","/images/products/buzobutterfly.jpg", "Buzo con explosión visual.", "Blanco"),
("Buzo Car","/images/products/buzocar.jpg", "Buzo inspirado en la serie de Fast and Furious.", "Blanco"),
("Buzo Future","/images/products/buzofuture.jpg", "Buzo en tendencia con tela extra suave.", "Verde"),
("Buzo Eminem","/images/products/buzoeminem.jpg", "Buzo inspirado en el albúm de Eminem", "Blanco"),
("Buzo Astrowold","/images/products/buzoastroworld.jpg", "Buzo con colores vibrantes", "Beige"),
("Buzo King of the Kongo","/images/products/buzokingofthekongo.jpg", "Hermoso buzo Buenos Aires a la moda", "Azul"),
("Buzo Tupac","/images/products/buzotupac.jpg", "Buzo inspirado en el gran artista Tupac", "Naranja"),
("Buzo Undefined","/images/products/buzoundefined.jpg", "Buzo de gran calidad, nueva colección undefined.", "Negro"),
("Buzo Los Ángeles","/images/products/buzolosangeles.jpg", "Buzo estilo oversize de gran calidad.", "Marrón");


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