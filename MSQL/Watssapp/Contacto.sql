CREATE TABLE contactos(
    contacto_Id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_Id INT NOT NULL UNIQUE,
    usuario_contacto_Id INT NOT NULL UNIQUE,
    activo BOOLEAN DEFAULT TRUE,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (usuario_Id) REFERENCES usuarios(usuario_Id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_contacto_Id) REFERENCES usuarios(usuario_Id) ON DELETE CASCADE,
    UNIQUE(usuario_Id, usuario_contacto_Id)
    )