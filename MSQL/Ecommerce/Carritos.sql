CREATE TABLE carritos(
    carrito_Id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_Id INT NOT NULL,
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (usuario_Id) REFERENCES usuarios(usuario_Id) ON DELETE CASCADE
)

INSERT INTO carritos (usuario_Id, fecha_creacion, activo)
VALUES 
    (2, '2024-09-15', TRUE),
    (3, '2024-09-14', TRUE),
    (1, '2024-09-13', FALSE);
