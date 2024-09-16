CREATE TABLE carrito_productos(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    carrito_Id INT NOT NULL,
    producto_Id INT NOT NULL,
    cantidad INT NOT NULL,
    fecha_agregado DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (carrito_Id) REFERENCES carrito(carrito_Id) ON DELETE CASCADE
    FOREIGN KEY (producto_Id) REFERENCES productos(producto_Id) ON DELETE CASCADE
)
