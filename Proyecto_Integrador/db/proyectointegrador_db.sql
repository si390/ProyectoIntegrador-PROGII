CREATE SCHEMA proyectointegrador;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(100) not null, 
contraseña varchar(12) not null,
fecha datetime not null,
dni int unique not null, 
foto text,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 

foreign key () references () 
);


CREATE TABLE productos(
	id INT UNSIGNED PRIMARY KEY auto_increment,
    nombr_imagen INT NOT NULL,
    nombre VARCHAR(100),
    descripcion VARCHAR(100) NOT NULL,
    
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAT TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP

foreign key () references () 
);

CREATE TABLE comentarios(
	id INT PRIMARY KEY auto_increment,
    usuario VARCHAR(100) NOT NULL,
    texto VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 

foreign key () references () 
);

















