CREATE SCHEMA proyectointegrador;

CREATE TABLE usuarios(
	id int unsigned primary key auto_increment,
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
    
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAT TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP

    FOREIGN KEY (nombre) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
	id INT PRIMARY KEY auto_increment,
    usuario VARCHAR(100) NOT NULL,
    texto VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 

    FOREIGN KEY (usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id) REFERENCES productos(id)
);

INSERT INTO usuarios
values
(DEFAULT, "user1@gmail.com", "contraseña1", 1993-02-19, 99999999, "/images/users/default-image.png"),
(DEFAULT, "user2@gmail.com", "contraseña2", 1982-03-24, 33658954, "/images/users/default-image.png"),
(DEFAULT, "user3@gmail.com", "contraseña3", 2003-07-18, 22548902, "/images/users/default-image.png"),
(DEFAULT, "user4@gmail.com", "contraseña4", 1996-10-14, 10257836, "/images/users/default-image.png"),
(DEFAULT, "user5@gmail.com", "contraseña5", 2001-07-06, 45856321, "/images/users/default-image.png");

INSERT INTO productos
values
(DEFAULT, DEFAULT, "Buzo Red", "Muy bueno"),
(DEFAULT, DEFAULT, "Buzo Butterfly", "Excelente calidad"),
(DEFAULT, DEFAULT, "Buzo Car", "Lo recomiendo"),
(DEFAULT, DEFAULT, "Buzo Future", "Me gustó"),
(DEFAULT, DEFAULT, "Buzo Eminem", "Me encantó");













