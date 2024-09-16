CREATE TABLE ordenes(
    ordenes_Id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_Id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    estado ENUM('pendiente', 'procesando', 'completado', 'cancelado'),
    FOREIGN KEY (usuario_Id) REFERENCES usuarios(usuario_Id) ON DELETE CASCADE
    ) 