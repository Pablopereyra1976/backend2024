CREATE TABLE productos(
    producto_Id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    precio DECIMAL NOT NULL,
    stock INT ,
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    activo BOOLEAN DEFAULT TRUE
)

INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
('Laptop', 'Laptop de alta gama con 16GB RAM', 1200.00, 10),
('Smartphone', 'Smartphone con cámara de 108MP', 800.00, 20),
('Tablet', 'Tablet con pantalla de 10 pulgadas', 300.00, 15),
('Auriculares', 'Auriculares inalámbricos con cancelación de ruido', 150.00, 50);