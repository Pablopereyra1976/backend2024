CREATE TABLE ordenes_productos (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    orden_Id INT NOT NULL,
    producto_Id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL (10,2) NOT NULL,
    FOREIGN KEY (orden_Id) REFERENCES ordenes(ordenes_Id),
    FOREIGN KEY (producto_Id) REFERENCES productos(producto_Id)
)