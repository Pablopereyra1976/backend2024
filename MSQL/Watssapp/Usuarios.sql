   
CREATE TABLE usuarios(
    usuario_Id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    creado_en DATE DEFAULT CURRENT_DATE
)

INSERT INTO usuarios(`username`,`email`,`password_hash`) VALUES ('pepe','pepe@gmail',,'pepesito123')
ALTER TABLE `usuarios` CHANGE `creado_en` `creado_en` DATE NOT NULL DEFAULT 'curdate()';
ALTER TABLE `usuarios` CHANGE `activo` `activo` TINYINT(1) NOT NULL DEFAULT '1';